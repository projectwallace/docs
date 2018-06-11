export default () => (
	<header className='site-header'>
		<nav className="site-nav">
			<a className='logo' href='/'>Wallace</a>
		</nav>
		<nav className="user-links">
			<div className="btn-group">
				<a href="/login" className="btn">Login</a>
				<a href="/register" className="btn btn--cta">Register</a>
			</div>
		</nav>

		<style jsx>{`
			.site-header {
				padding-top: 16px;
				padding-bottom: 16px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				background: #050506;
				color: #eae9ec;
				border-top: 3px solid #0ce18b;
				border-bottom: 3px solid #33313a;
				padding-right: 16px;
				padding-left: 16px;
			}
		`}</style>
	</header>
)