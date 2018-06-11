import {Component} from 'react'
import Prismic, {Predicates} from 'prismic.io'
import {RichText} from 'prismic-dom'
import Error from 'next/error'
import Link from 'next/link'

import linkresolver from '../helpers/linkresolver'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const PRISMIC_API_URL = 'https://project-wallace.cdn.prismic.io/api/v2'

export default class extends Component {
	static async getInitialProps({query}) {
		const api = await Prismic.api(PRISMIC_API_URL)
		const doc = await api.getByUID('doc', query.slug)

		if (!doc) {
			return {notFound: true}
		}

		const { results } = await api.query(
			Predicates.at('document.type', 'doc')
		)

		return {
			doc: {
				title: doc.rawJSON.title,
				content: RichText.asHtml(doc.rawJSON.content, linkresolver),
				lastModified: doc.lastPublicationDate
			},
			docs: results.map(post => {
				return {
					type: 'doc',
					title: post.rawJSON.title,
					slug: post.uid,
					lastModified: post.lastPublicationDate,
					active: post.uid === query.slug
				}
			})
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

					<Sidebar className='sidebar' docs={this.props.docs} />

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
