import React from 'react';

import appConfig from '../../../config';

// small helper utility for mapping an intended page
// locale based on available locales/navigator values

function determineLocalesFromProps({ data, pageContext: { slug } }, resolvefrom) {
	const allCosmicNodes = data[resolvefrom] && data[resolvefrom].edges;
	if (!Array.isArray(allCosmicNodes) || !allCosmicNodes.length) return []; 

	const localisedCosmicNodes = slug ?
		// filter by provided resource slug
		allCosmicNodes
			.filter(({ node }) => node.slug === slug) :
		// otherwise assume the available nodes are
		// already sorted by slug
		allCosmicNodes;

	// determine detected resource locales based on presented Cosmic JS resource
	const detectedContentLocales = [];

	let index = localisedCosmicNodes.length;
	let currentNode;

	while (index--) {
		currentNode = localisedCosmicNodes[index].node;
		if (currentNode.locale) {
			detectedContentLocales.push(currentNode.locale)
		}
	}

	return detectedContentLocales;
}

function determinePreferredLocales(isClient) {
	const defaultLocales = [appConfig.fallbackLocale];

	if (isClient) {
		return window.navigator.languages || defaultLocales;
	}

	return defaultLocales;
}

function localeFromCurrentLocation(location, availableLocales) {
	let index = availableLocales.length;

	while (index--) {
		if (location.pathname.indexOf(`/${availableLocales[index]}`) === 0) {
			// the currently rendered resource is already mapped to a
			// present locale, so return it
			return availableLocales[index];
		}
	}

	// otherwise treat as though we did not find the correct locale
	return null;
}

const generateAlternateResourceUrls = (availableLocales, intendedLocale, location) =>
	Object.assign({}, ...availableLocales
		// don't include pairing for currently selected locale
		.filter(locale => locale !== intendedLocale)
		// map key-value pairing for locale -> alternativeUrl
		.map(alternativeLocale => ({
			[alternativeLocale]: location.pathname.replace(intendedLocale, alternativeLocale),
		}))
	);

const withLocale = (WrappedComponent, options = {}) => props => {
	const {
		// the GraphQL data node to use to resolve locales from
		resolveFrom = 'allCosmicjsPages',
		// determine if we should map the intended locale from the
		// loaded resource path
		fromLocation = false,
	} = options;

	const isClient = typeof window === 'object' && window.navigator;

	// attempt to determine navigator-based locale preference
	const preferredLocales = determinePreferredLocales(isClient);

	// resolve available locales for the rendered Cosmic JS resource
	const availableLocales = determineLocalesFromProps(props, resolveFrom) || [];

	// determine most appropriate locale to use based on
	// availability, or default to the first available
	// also prefer current items locale if present
	const intendedLocale =
		// attempt to resolve a valid locale from the currently presented resource
		// only if not otherwise disabled
		(fromLocation && localeFromCurrentLocation(props.location, availableLocales)) ||
		// attempt to resolve a valid locate from the current resources pageContext
		(props.pageContext && props.pageContext.locale) ||
		// attempt to resolve a locale based on the the user preference 
		availableLocales.find(locale => preferredLocales.includes(locale)) ||
		// otherwise fallback onto the first known available locale
		availableLocales[0];

	console.log({ props, preferredLocales, availableLocales })

	// generate key-value pairing of alternative paths for the given resource
	const alternateResourceUrls = generateAlternateResourceUrls(availableLocales, intendedLocale, props.location);

	return (
		<WrappedComponent
			{...props}
			locale={{
				intendedLocale,
				availableLocales,
				preferredLocales,
				alternateResourceUrls
			}}
		/>
	)
}

export default withLocale;