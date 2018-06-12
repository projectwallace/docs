import Head from './head'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'
import Sidebar from '../sidebar'

export default props => (
	<div>
		<Head title={props.title}></Head>

		<div className="body">
			<SiteHeader />

			<main className="wrapper">
				<div className="content">
					{props.children}
				</div>
				<Sidebar className="sidebar" docs={props.docs} activeDoc={props.activeDoc} />
			</main>

			<SiteFooter />
		</div>

		<style jsx>{`
			.body {
				min-height: 100vh;
				display: flex;
				flex-direction: column;
			}

			@media (min-width: 1000px) {
				.wrapper {
					display: grid;
					grid-template-columns: 400px 1fr;
					grid-gap: 48px 16px;
					grid-template-areas: 'sidebar content';
				}

				.content {
					grid-area: content;
				}

				.sidebar {
					grid-area: sidebar;
				}
			}
		`}</style>
	</div>
)