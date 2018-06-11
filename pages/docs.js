import {Component} from 'react'
import Prismic, {Predicates} from 'prismic.io'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

const PRISMIC_API_URL = 'https://project-wallace.cdn.prismic.io/api/v2'

export default class extends Component {
	static async getInitialProps() {
		const api = await Prismic.api(PRISMIC_API_URL)
		const { results } = await api.query(
			Predicates.at('document.type', 'doc')
		)

		return {
			docs: results.map(post => {
				return {
					type: 'doc',
					title: post.rawJSON.title,
					slug: post.uid,
					lastModified: post.lastPublicationDate
				}
			})
		}
	}

	render() {
		return <Layout title="Docs">
			<h1>Docs home</h1>

			<Sidebar docs={this.props.docs} />
		</Layout>
	}
}