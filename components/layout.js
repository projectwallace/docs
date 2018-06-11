import Head from './head'
import SiteHeader from './site-header'
import SiteFooter from './site-footer'

export default props => (
	<div>
		<Head title={props.title}></Head>

		<div className="body">
			<SiteHeader />

			<main>
				{props.children}
			</main>

			<SiteFooter />
		</div>

		<style global jsx>{`
			html {
				font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
				font-weight: 400;
				font-size: 16px;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
				-webkit-text-size-adjust: 100%;
				-ms-text-size-adjust: 100%;
				background-color: #1d1c21;
				color: #eae9ec;
				height: 100%;
			}

			* {
				box-sizing: border-box;
			}

			body {
				margin: 0;
				overflow-x: hidden;
			}

			.body {
				min-height: 100vh;
				display: flex;
				flex-direction: column;
			}

			main {
				padding: 16px 16px 64px;
			}

			h1 {
				font-weight: lighter;
				font-size: 48px;
			}

			a {
				color: inherit;
			}
		`}</style>
	</div>
)