const config = require('./config.json');
const homepageData = require('./content/data/homepage.json');

module.exports = {
	//this makes the site config available to forestry cms
	siteMetadata: {
		title: config.title,
		description: config.description,
		repoUrl: config.repository_url,
		siteUrl: 'https://purpleorangeaudio.com',
		about: config.about,
		contact: config.contact,
		primaryColor: config.primary_color,
		homepage: homepageData
	},
	plugins: [
		'gatsby-plugin-sitemap',
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-158090763-1'
			}
		},
		`gatsby-plugin-catch-links`,
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /images\/.*\.svg/
				}
			}
		},
		'gatsby-plugin-sass',
		'gatsby-transformer-remark',
		'gatsby-plugin-react-helmet',
		'gatsby-transformer-yaml',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'src',
				path: `${__dirname}/src/`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/content/posts`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'pages',
				path: `${__dirname}/content/pages`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'data',
				path: `${__dirname}/content/data`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: 'images',
				path: `${__dirname}/content/images`
			}
		},
		{
			resolve: 'gatsby-plugin-sharp',
			options: {
				defaultQuality: 75
			}
		},
		`gatsby-transformer-sharp`,
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					'gatsby-remark-relative-images',
					'gatsby-remark-normalize-paths',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1000,
							linkImagesToOriginal: false
						}
					}
				]
			}
		}
	]
};
