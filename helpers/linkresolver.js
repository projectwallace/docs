module.exports = doc => {
	switch (doc.type) {
		case 'doc':
			return `/docs/${doc.slug}`
		default:
			return '/'
	}
}
