const path = require('path');

const basicSitePagePath = path.resolve('./src/components/modules/SitePage.js');
const postListingPagePath = path.resolve('./src/components/modules/SitePostListing.js');

exports.createPages = async ({ actions, graphql }) => {
	// iteration helper for simplifying the mapping of Cosmic JS Nodes
	// to a locale-based path
	const pageFromCosmicNode = ({ component, relativeRoot = '' }) => ({ node: { id, locale, slug }}) => actions.createPage({
		// handle component as string building function, otherwise treat
		// as basic string
		component: typeof component === 'function' ? component(slug) : component,
		// index slugs will be treated as empty
		path: `/${locale}${relativeRoot}/${slug === 'index' ? '' : slug}`,
		// prefer `id` since it's actually unique (unlike shared slugs
		// between locales)
		context: { id, slug, locale },
	});
	
	const {
		allCosmicjsBlogPosts: { edges: blogPosts },
		allCosmicjsPages: { edges: sitePages },
	} = (await graphql(`
		{
			allCosmicjsBlogPosts{
				edges{
					node{
						id
						slug
						locale
					}
				}
			}
			allCosmicjsPages{
				edges{
					node{
						id
						slug
						locale
					}
				}
			}
		}
	`)).data;

	// iterate localised blog posts
	blogPosts.forEach(pageFromCosmicNode({
		component: path.resolve('./src/components/modules/BlogPost.js'),
		relativeRoot: '/posts',
	}));

	// iterate localised site pages
	sitePages.forEach(pageFromCosmicNode({
		component(slug) {
			// return post listing page specifically for the posts page
			if (slug === 'posts') return postListingPagePath;
			// otherwise treat as a generic page
			return basicSitePagePath;
		}, 
	}));
}
