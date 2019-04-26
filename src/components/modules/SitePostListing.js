import React, { Fragment } from "react"
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/Default';
import Container from '../layouts/common/Container';
import HTMLContentArea from '../atoms/HTMLContentArea';
import PostList from '../molecules/PostList';
import withLocale from './withLocale';

function BlogPostListing({ data, locale }) {
	const {
		cosmicjsPages: page,
		allCosmicjsBlogPosts: { edges: postsFromLocale },
		allCosmicjsPages: { edges: allPages },
	} = data;

	return (
		<DefaultLayout
			title={page.title}
			content={
				<Fragment>
					<HTMLContentArea>
						{page.content}
					</HTMLContentArea>
					<PostList
						posts={postsFromLocale}
						locale={locale}
					/>
				</Fragment>
			}
			locale={locale}
			allPages={allPages}
		/>
	);
}

export default withLocale(BlogPostListing);

export const query = graphql`
	query BlogPostListingQuery($id: String!, $locale: String!) {
		cosmicjsPages(id: { eq: $id }) {
			title
			content
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
		allCosmicjsBlogPosts(filter: {locale: {eq: $locale}}){
			edges{
				node{
					title
					slug
					modified_at
					created_at
				}
			}
		}
	}
`;