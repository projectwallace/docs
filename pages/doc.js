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

				<style jsx>{`
					h1 {
						font-weight: lighter;
						font-size: 48px;
						font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
						margin-bottom: 48px;
					}
				`}</style>

				<style jsx global>{`
					pre {
						background-color: #252329;
						padding: 16px 24px;
						overflow: auto;
					}

					@media (min-width: 1000px) {
						pre {
							max-width: 600px;
							max-width: calc(100vw - 500px);
						}
					}

					.doc__content {
						margin-bottom: 96px;
					}

					.doc__content h2 {
						margin: 48px 0 16px;
					}

					.doc__content h3 {
						margin: 24px 0 16px;
						font-size: 16px;
						font-weight: bold;
						text-transform: uppercase;
					}

					.doc__content p {
						line-height: 1.5;
						margin-bottom: 24px;
					}

					.doc__content ol,
					.doc__content ul {
						margin-left: 48px;
					}

					.doc__content li p {
						margin-bottom: 8px;
					}
				`}</style>
			</Layout>
		)
	}
}
