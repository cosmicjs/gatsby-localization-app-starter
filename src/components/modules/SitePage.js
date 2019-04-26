import React from "react"
import { graphql } from 'gatsby';

import DefaultLayout from '../layouts/Default';
import HTMLContentArea from '../atoms/HTMLContentArea';
import withLocale from './withLocale';

function SitePage({ data, locale }) {
	const {
		cosmicjsPages: page,
		allCosmicjsPages: { edges: allPages },
	} = data;

	return (
		<DefaultLayout
			title={page.title}
			content={
				<HTMLContentArea>
					{page.content}
				</HTMLContentArea>
			}
			locale={locale}
			allPages={allPages}
		/>
	);
}

export default withLocale(SitePage);

export const query = graphql`
	query SitePageQuery($id: String!) {
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
	}
`;