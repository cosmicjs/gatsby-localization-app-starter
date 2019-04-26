import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const HeaderNavigationWrapper = styled.nav`
	text-align: center;
`;

const HeaderNavigationList = styled.ul`
	padding: 0;
	margin: 0;
	list-style: none;
`;

const HeaderNavigationLink = styled(Link)`
	font-size: 1.2rem;
	padding: .4rem .8rem;

	&, &:visited, &:disabled {
		text-decoration: none;
		color: inherit;
	}

	&:hover {
		text-decoration: underline;
	}
`;

export default function HeaderNavigation({ intendedLocale, allPages }) {
	// determine all listable pages based on the currently selected
	// locale
	const availableCosmicPagesByLocale = allPages
		.filter(({ node }) => node.locale === intendedLocale)
		.sort(({ node }) => node.slug === 'index' ? -1 : 1)

	return (
		<HeaderNavigationWrapper>
			<HeaderNavigationList>
				{availableCosmicPagesByLocale.map(({ node: pageNode }) => (
					<HeaderNavigationLink
						to={`/${intendedLocale}/${pageNode.slug === 'index' ? '' : pageNode.slug}`}
					>
						{pageNode.title}
					</HeaderNavigationLink>
				))}
			</HeaderNavigationList>
		</HeaderNavigationWrapper>
	);
}