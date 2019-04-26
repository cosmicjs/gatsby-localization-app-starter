import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const LocaleSelectionList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	& > li {
		display: inline-block;
	}
`;

const buildLocaleSelection = Comp => styled(Comp)`
	display: inline-block;
	font-weight: ${({ isActive }) => isActive ? '600' : '400'};
	border: 0;
	padding: .6rem;
	background-color: rgba(0,0,0, .1);
	text-decoration: none;

	margin-right: .5rem;

	&:hover, &:visited, &:disabled {
		text-decoration: none;
		color: inherit;
	}
`;

const LocaleSelectionButton = buildLocaleSelection('button');
const LocaleSelectionLink = buildLocaleSelection(Link);

// provide a means of selecting a different locale variant of the current page within view
export default function LocaleSelector({
	alternateResourceUrls,
	intendedLocale,
	availableLocales,
}) {
	return (
		<LocaleSelectionList>
			{availableLocales.map((localeString) => {
				const isActive = localeString === intendedLocale;
				
				// only render button if current active version
				const LocaleActionable = isActive ?
					LocaleSelectionButton : LocaleSelectionLink;

				return (
					<li key={localeString}>
						<LocaleActionable
							to={alternateResourceUrls[localeString] || './'}
							isActive={isActive}
							disabled={isActive}
						>
							{localeString}
						</LocaleActionable>
					</li>
				)
			})}
		</LocaleSelectionList>
	);
}