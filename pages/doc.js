import {Component} from 'react'
import {RichText} from 'prismic-dom'
import Error from 'next/error'
import Link from 'next/link'
import marked from 'marked'
import striptags from 'striptags'

import linkresolver from '../helpers/linkresolver'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import Prismic from '../services/prismic'

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

		return (
			<Layout title={this.props.doc.title}>
				<div className="doc">
					<article>
						<h1>{this.props.doc.title}</h1>
						<div dangerouslySetInnerHTML={{__html: this.props.doc.content}}></div>
					</article>

					<Sidebar className='sidebar' docs={this.props.docs} activeDoc={this.props.activeDoc} />

					<Link href='/docs'>
						<a className='return'>Back to docs homepage</a>
					</Link>
				</div>

				<style jsx>{`
					@media (min-width: 1000px) {
						.doc {
							display: grid;
							grid-template-columns: 400px 1fr;
							grid-template-areas: 'sidebar doc' '. return';
							grid-gap: 48px 16px;
						}
					}

					article {
						grid-area: doc;
					}

					.return {
						grid-area: return;
						color: #9491a1;
					}
				`}</style>
			</Layout>
		)
	}
}
