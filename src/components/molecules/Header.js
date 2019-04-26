import React from 'react';
import styled from '@emotion/styled';
import { readableColor, darken } from 'polished';

import appConfig from '../../../config';

import Container from '../layouts/common/Container';
import HeaderNav from '../atoms/HeaderNav';

const { primaryTransitionSpeed } = appConfig.theme;

const withBgColor = styleAction => ({ headerBackgroundColor = appConfig.theme.primaryAccent }) =>
	styleAction(headerBackgroundColor);

export const HeaderWrapper = styled.header`
	padding: 1rem;
	background-color: ${withBgColor(bg => bg)};
	color: ${withBgColor(bg => readableColor(bg))};
	border-bottom: solid .4rem ${withBgColor(bg => darken(0.15, bg))};
	transition: color ${primaryTransitionSpeed}, background ${primaryTransitionSpeed};
`;

const HeaderSiteTitle = styled.h1`
	color: inherit;
	text-align: center;
`;

export default function Header({
	children, headerBackgroundColor,
	allPages, locale, title,
	siteTitle = appConfig.defaultSiteTitle,
}) {
	return (
		<HeaderWrapper
			headerBackgroundColor={headerBackgroundColor}
		>
			<Container>
				<HeaderSiteTitle>
					{title || siteTitle}
				</HeaderSiteTitle>
				<HeaderNav
					intendedLocale={locale.intendedLocale}
					allPages={allPages}
				/>
			</Container>
		</HeaderWrapper>
	);
}