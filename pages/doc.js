import {Component} from 'react'
import Error from 'next/error'
import Link from 'next/link'

import Prismic from '../services/prismic'

import Layout from '../components/global/layout'
import Sidebar from '../components/sidebar'

export default class extends Component {
	static async getInitialProps({query}) {
		const doc = await Prismic.getCollectionItem('doc', query.slug)

		if (!doc) {
			return {notFound: true}
		}

		const {results} = await Prismic.getCollectionItems('doc')

		return {
			doc: Prismic.mapDoc(doc),
			docs: results.map(doc => Prismic.mapDoc(doc)),
			activeDoc: query.slug
		}
	}

	render() {
		if (this.props.notFound) {
			return <Error statusCode={404} />
		}

		const {activeDoc, docs, doc} = this.props

		return (
			<Layout title={doc.title} docs={docs} activeDoc={activeDoc}>
				<article className="doc__content">
					<h1>{doc.title}</h1>
					<div dangerouslySetInnerHTML={{__html: doc.content}}></div>
				</article>

				<Link href='/docs'>
					<a className='return'>Back to docs homepage</a>
				</Link>
			</Layout>
		)
	}
}
