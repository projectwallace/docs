import Link from 'next/link'
import linkresolver from '../helpers/linkresolver'

export default props => (
	<div>
		<ol>
			{props.docs.map(doc => (
				<li key={doc.slug}>
					<Link href={`/doc?slug=${doc.slug}`} as={linkresolver(doc)}>
						<a className={doc.slug === props.activeDoc ? 'active': ''}>{doc.title}</a>
					</Link>
				</li>
			))}
		</ol>

		<style jsx>{`
			div {
				margin-top: 48px;
			}

			ol {
				padding-left: 0;
				list-style: none;
				margin-left: -16px;
			}

			li {
				margin-bottom: 8px;
			}

			a {
				display: block;
				color: inherit;
				text-decoration: none;
				padding: 8px 16px;
				border-left: 3px solid transparent;
			}

			.active {
				border-left-color: #0ce18b;
				font-weight: bolder;
			}
		`}</style>
	</div>
)