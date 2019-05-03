# Gatsby Localization App Starter

## [Demo](https://github.com/cosmicjs/gatsby-localization-website)

## Why

1. The ability to host your own localized Site within Gatsby JS
2. Leverages the power of Cosmic JS localization

## Installing the demo (from Cosmic JS App Section)

Cosmic JS provides an easy-to-use means of creating your own clone of this starter application from their own web ui. If you don't like getting your hands too dirty, or just would like to give the starter app a test drive, you can access it from here. The prompts will guide you in creating an account and creating the necessary items.

## Installing the demo (from source)

The project source can be found here on github. After cloning the repository, you should have something that loosely resembles the following structure.

```
.gitignore
config.js
gatsby-config.js
gatsby-node.js
package.json
package-lock.json
LICENSE
src
├── components
│   ├── atoms
│   │   ├── HeaderNav.js
│   │   ├── HTMLContentArea.js
│   │   ├── LocaleSelector.js
│   │   └── PostTile.js
│   ├── layouts
│   │   ├── Blog.js
│   │   ├── common
│   │   │   ├── Container.js
│   │   │   ├── GlobalStyles.js
│   │   │   └── Head.js
│   │   └── Default.js
│   ├── modules
│   │   ├── BlogPost.js
│   │   ├── SitePage.js
│   │   ├── SitePostListing.js
│   │   └── withLocale.js
│   └── molecules
│       ├── Footer.js
│       ├── Header.js
│       └── PostList.js
└── pages
    └── index.js
```

Also make sure you `npm install` so you have the needed repositories for running the Gatsby starter application.

### Configuring the base project

The project itself has two main files that are intended to be configure. `gatsby-config.js` is responsible for specifying which Cosmic JS Bucket to source your content from, while the `config.js` file is used for configuring various front-end portions of your application.

To ensure that Gatsby is able to read your Cosmic Js Bucket, you need to fill out the areas within `gatsby-config.js` that resemble the following:


```js
module.exports = {
	plugins: [
		'gatsby-plugin-emotion',
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-source-cosmicjs`,
			options: {
				bucketSlug: 'minimal-gatsby-localisation-site',
				objectTypes: ['blog-posts', 'pages'],
				apiAccess: {
					read_key: ``,
				}
			}
		}
	],
}
```

For the above, ensure that the `bucketSlug` values correlates with your own Cosmic JS Bucket, and that the `apiAccess.read_key` is present if you've configured your bucket to require it. Also make sure you have `blog post` and `pages` Nodes within your Bucket, otherwise the `gatsby-source-cosmicjs` will not have the correct Gatsby GraphQL queries (preventing you from running the demo)

## Running the demo

To start the demo (in development mode) after all dependencies have been started, simply run `npm start`, or alternatively `npm run develop`. The project will then (by default) be accessible on port `8000` on `localhost`. The console output of the command will also let you know in case its been configured otherwise.

The first thing you see should resemble.

[Example]('./docs/example.png)
