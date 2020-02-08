import { graphql, useStaticQuery } from 'gatsby';

export default function useHomepageData() {
	const data = useStaticQuery(graphql`
		query getHomepageData {
			allMarkdownRemark(
				sort: { order: DESC, fields: frontmatter___date }
				filter: { frontmatter: { title: { in: ["Homepage"] } } }
			) {
				edges {
					node {
						id
						frontmatter {
							date(formatString: "MMMM Do, YYYY")
							author
							title
							heading
							subheading
							hero_image {
								childImageSharp {
									fluid(maxWidth: 800) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}
						html
						excerpt(pruneLength: 200)
						fields {
							slug
						}
					}
				}
			}
		}
	`);
	return data.allMarkdownRemark.edges;
}
