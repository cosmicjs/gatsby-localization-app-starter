import React from 'react';
import { Helmet } from 'react-helmet';

import appConfig from '../../../../config';

function generatePageTitle(title, siteTitle) {
	const finalTitleParts = [];

	if (title) {
		// prepend page-specific title if provided
		finalTitleParts.push(title);
	}

	finalTitleParts.push(siteTitle || appConfig.fallbackSiteTitle);

	// trim surrounding whitespace of each part
	// separate with pipe character if more than one part provided
	return finalTitleParts
		.map(part => part.trim())
		.join(' | ');
}

export default function Head({
	title, siteTitle, children,
}) {
	return (
		<Helmet>
			<title>{generatePageTitle(title, siteTitle)}</title>
			{children}
		</Helmet>
	);
}