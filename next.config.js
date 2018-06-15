const Prismic = require('prismic.io')
const PrismicDOM = require('prismic-dom')
const marked = require('marked')
const striptags = require('striptags')
const {Predicates} = Prismic

const linkresolver = require('./helpers/linkresolver')

function mapDoc(doc) {
  function prismicToMarkDownToHtml(prismicContent, linkresolver) {
    return marked(
      striptags(
        PrismicDOM.RichText.asHtml(
          prismicContent,
          linkresolver
        ),
        [],
        '\n'
      )
    )
  }

  return {
    type: 'doc',
    title: doc.rawJSON.title,
    content: prismicToMarkDownToHtml(doc.rawJSON.content, linkresolver),
    lastModified: doc.lastPublicationDate,
    slug: doc.uid
  }
}

module.exports = {
  webpack: (config) => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }

    return config
  },
  exportPathMap: async () => {
    const api = await Prismic.api('https://project-wallace.cdn.prismic.io/api/v2')
    const {results} = await api.query(
      Predicates.at('document.type', 'doc'),
      { 'orderings': '[my.doc.title]' }
    )
    const docs = results
      .map(doc => mapDoc(doc))
      .reduce((acc, curr) => {
        acc[`/docs/${curr.slug}`] = {page: '/doc', query: {slug: curr.slug}}
        return acc
      }, {})

    return {
      '/': {page: '/'},
      '/docs': {page: '/docs'},
      ...docs
    }
  }
}
