const sitemap = [{
	title: 'Project Wallace',
	links: [{
		title: 'Explore',
		url: ''
	}, {
		title: 'About',
		url: ''
	}, {
		title: 'Blog',
		url: ''
	}]
}, {
	title: 'Social',
	links: [{
		title: 'GitHub',
		url: ''
	}]
}]

export default () => (
	<footer className="site-footer">
		<div className="sitemap">
			{sitemap.map(section => (
				<nav className="sitemap__section">
					<strong className="sitemap__title">{section.title}</strong>
					{section.links.map(link => (
						<a className="sitemap__link" href={link.url}>{link.title}</a>
					))}
				</nav>
			))}
		</div>
	</footer>
)