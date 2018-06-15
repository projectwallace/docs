import Prismic, { Predicates } from 'prismic.io'
import marked from 'marked'
import striptags from 'striptags'
import { RichText } from 'prismic-dom'

import linkresolver from '../helpers/linkresolver'

class PrismicClient {
	constructor(opts = {}) {
		this.api_url = opts.api_url
	}

	async getCollectionItem(collection, id) {
		const client = await Prismic.api(this.api_url)
		return client.getByUID(collection, id)
	}

	async getCollectionItems(collection) {
		const client = await Prismic.api(this.api_url)
		return client.query(
			Predicates.at('document.type', collection),
			{'orderings': '[my.doc.title]'}
		)
	}

	mapDoc(doc) {
		function prismicToMarkDownToHtml(prismicContent, linkresolver) {
			return marked(
				striptags(
					RichText.asHtml(doc.rawJSON.content, linkresolver),
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
}

export default new PrismicClient({
	api_url: 'https://project-wallace.cdn.prismic.io/api/v2'
})