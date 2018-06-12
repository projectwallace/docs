import {Component} from 'react'

import Layout from '../components/global/layout'
import Prismic from '../services/prismic'

export default class extends Component {
	static async getInitialProps() {
		const {results} = await Prismic.getCollectionItems('doc')

		return {
			docs: results.map(doc => Prismic.mapDoc(doc))
		}
	}

	render() {
		return <Layout title="Docs" docs={this.props.docs}>
			<h1>Docs home</h1>
		</Layout>
	}
}