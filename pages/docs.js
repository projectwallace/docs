import {Component} from 'react'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

import Prismic from '../services/prismic'

export default class extends Component {
	static async getInitialProps() {
		const {results} = await Prismic.getCollectionItems('doc')

		return {
			docs: results.map(doc => Prismic.mapDoc(doc))
		}
	}

	render() {
		return <Layout title="Docs">
			<h1>Docs home</h1>

			<Sidebar docs={this.props.docs} />
		</Layout>
	}
}