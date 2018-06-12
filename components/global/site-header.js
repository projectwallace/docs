export default () => (
	<header className='site-header'>
		<nav className="site-nav">
			<a className='logo' href='https://www.projectwallace.com'>Wallace</a>
			<form className="site-search" method="GET" action="https://www.projectwallace.com/search">
				<label className="site-search__label" for="site-search-query">What are you looking for?</label>
				<input className="site-search__input" id="site-search-query" name="q" placeholder="Type your search here" type="search" />
				<button className="site-search__submit">Search!</button>
			</form>
			<a href="https://www.projectwallace.com/explore" className="site-nav__link">Explore</a>
			<a href="https://www.projectwallace.com/about" className="site-nav__link">About</a>
			<a href="https://www.projectwallace.com/docs" className="site-nav__link site-nav__link--is-active">Docs</a>
		</nav>
		<nav className="user-links">
			<div className="btn-group">
				<a href="https://www.projectwallace.com/login" className="btn">Log in</a>
				<a href="https://www.projectwallace.com/register" className="btn btn--cta">Register</a>
			</div>
		</nav>

		<style jsx>{`
			.site-header {
				border-bottom: none;
				padding: 0 16px;
				margin-bottom: 48px;
			}

			.site-nav__link {
				text-decoration: none;
				padding: 16px 4px;
			}

			.site-nav__link::after {
				border-bottom: none;
			}

			.site-nav__link:hover::after {
				transform: none;
			}

			.site-nav__link--is-active::after {
				position: absolute;
				bottom: 0;
				right: 0;
				left: 0;
				border-bottom: 3px solid #0ce18b;
			}
		`}</style>
	</header>
)