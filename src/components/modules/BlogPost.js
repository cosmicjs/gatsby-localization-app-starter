import React from "react"
import { graphql } from 'gatsby';

import BlogLayout from '../layouts/Blog';
import HTMLContentArea from '../atoms/HTMLContentArea';
import withLocale from './withLocale';

function BlogPost({ data, locale }) {
	const {
		cosmicjsBlogPosts: post,
		allCosmicjsPages: { edges: allPages },
	} = data;

	return (
		<BlogLayout
			title={post.title}
			content={
				<HTMLContentArea>
					{post.content}
				</HTMLContentArea>
			}
			locale={locale}
			allPages={allPages}
		/>
	);
}

export default withLocale(BlogPost, { resolveFrom: 'allCosmicjsBlogPosts' });

export const query = graphql`
	query BlogPostQuery($id: String!, $slug: String!) {
		cosmicjsBlogPosts(id: { eq: $id }) {
			title
			content
			modified_at
			created_at
		}
		allCosmicjsBlogPosts(filter: {slug: {eq: $slug}}){
			edges{
				node{
					locale
					slug
				}
			}
		}
		allCosmicjsPages {
			edges{
				node{
					locale
					title
					slug
				}
			}
		}
	}
`;