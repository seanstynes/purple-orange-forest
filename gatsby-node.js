const path = require('path');

module.exports.onCreateNode = ({ node, actions }) => {
	// Transform the new node here and create a new node or
	// create a new node field.
	const { createNodeField } = actions;
	if (node.internal.type === 'MarkdownRemark') {
		const slug = path.basename(node.fileAbsolutePath, '.md');
		let type = 'default';
		if (node.fileAbsolutePath.indexOf('/posts/') !== -1) {
			type = 'post';
		} else {
			type = 'page';
		}
		createNodeField({
			//same as node: node
			node,
			name: 'slug',
			value: slug
		});

		createNodeField({
			node,
			name: 'type',
			value: type
		});
	}
};
module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const response = await graphql(`
		query {
			allMarkdownRemark {
				edges {
					node {
						fields {
							slug
							type
						}
					}
				}
			}
		}
	`);

	//create new pages with unique slug
	response.data.allMarkdownRemark.edges.forEach(edge => {
		let directory = '/posts/' + edge.node.fields.slug;
		let template = './src/templates/blog.js';
		if (edge.node.fields.type == 'page') {
			template = './src/templates/page.js';
			directory = '/' + edge.node.fields.slug;
		}

		createPage({
			component: path.resolve(template),
			path: path.resolve(directory),
			context: {
				slug: edge.node.fields.slug
			}
		});
	});
};
