import React, { Fragment } from 'react';

import appConfig from '../../../config';

import GlobalStyles from './common/GlobalStyles';
import Head from './common/Head';
import Container from './common/Container';

import Header from '../molecules/Header';
import Footer from '../molecules/Footer';

export default function BlogLayout({
	title, siteTitle, headerBackgroundColor,
	contentHeading, content, locale, allPages,
}) {
	return (
		<Fragment>
			<GlobalStyles />
			<Head
				title={title}
				siteTitle={siteTitle}
			/>
			<Header
				isBlogPost
				title={title}
				siteTitle={siteTitle}
				locale={locale}
				allPages={allPages}
				headerBackgroundColor={headerBackgroundColor}
			>
				<h2>
					{contentHeading}
				</h2>
			</Header>
			<Container
				maxWidth={appConfig.responsive.blogPostContainerMaxWidth}
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