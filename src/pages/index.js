import React from 'react';
import { graphql } from 'gatsby';
import { Redirect } from '@reach/router';

import withLocale from '../components/modules/withLocale';

// redirect the index page based on the preferred locale
// otherwise redirect to the first detected available locale
export default withLocale(({ locale }) => (
	<Redirect
		to={`/${locale.intendedLocale}`}
		noThrow
	/>
), { fromLocation: false });

// specifically query index site pages
export const query = graphql`
	{
		allCosmicjsPages(filter: {slug: {eq: "index" }}){
			edges{
				node{
					slug
					locale
				}
			}
		}
	}
`;
