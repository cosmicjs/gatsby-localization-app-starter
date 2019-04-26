module.exports = {
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-cosmicjs`,
			options: {
				bucketSlug: 'minimal-gatsby-localisation-site',
				objectTypes: ['blog-posts', 'pages'],
				apiAccess: {
					read_key: ``,
				}
			}
		}
	],
}
