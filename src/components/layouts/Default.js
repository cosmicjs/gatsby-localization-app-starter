import React, { Fragment } from 'react';

import appConfig from '../../../config';

import GlobalStyles from './common/GlobalStyles';
import Container from './common/Container';
import Head from './common/Head';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

export default function DefaultLayout({
	title, siteTitle, headerBackgroundColor,
	content, locale, allPages,
}) {
	return (
		<Fragment>
			<GlobalStyles />
			<Head
				title={title}
				siteTitle={siteTitle}
			/>
			<Header
				headerBackgroundColor={headerBackgroundColor}
				title={title}
				siteTitle={siteTitle}
				locale={locale}
				allPages={allPages}
			/>
			<Container
				minHeight={appConfig.responsive.defaultMinimumPageHeight}
			>
				{content}
			</Container>
			<Footer
				locale={locale}
			/>
		</Fragment>
	);
}