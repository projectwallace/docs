const sitemap = [{
	title: 'Project Wallace',
	links: [{
		title: 'Explore',
		url: 'https://www.projectwallace.com/explore'
	}, {
		title: 'About',
		url: 'https://www.projectwallace.com/about'
	}, {
		title: 'Blog',
		url: 'https://www.projectwallace.com/blog'
	}]
}, {
	title: 'Social',
	links: [{
		title: 'GitHub',
		url: 'https://github.com/projectwallace'
	}]
}]

export default () => (
	<footer className="site-footer">
		<div className="sitemap">
			{sitemap.map(section => (
				<nav className="sitemap__section" key={section.title.toLowerCase().replace(' ', '-')}>
					<strong className="sitemap__title">{section.title}</strong>
					{section.links.map(link => (
						<a key={link.url} className="sitemap__link" href={link.url}>{link.title}</a>
					))}
				</nav>
			))}
		</div>
	</footer>
)