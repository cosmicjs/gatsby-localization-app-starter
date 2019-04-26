// shared config values used within various parts of the application

module.exports = {
	// the default locale to prefer if no window.navigator values
	// can be resolved
	fallbackLocale: 'en-US',
	// fallback site title if none is provided via props
	fallbackSiteTitle: 'Gatsby Localization Website',
	// settings for default colors
	theme: {
		primaryAccent: '#8ad',
		// speed to do standard ui transitions
		primaryTransitionSpeed: '.2s',
	},
	// settings for responsive/layout configuration
	responsive: {
		// max width size for a default static page
		defaultContainerMaxWidth: '960px',
		// default minimum page height
		defaultMinimumPageHeight: 'calc(100vh - 256px)',
		// max width size for content blog posts
		blogPostContainerMaxWidth: '760px',
	},
};
