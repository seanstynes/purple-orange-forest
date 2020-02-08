import { graphql, useStaticQuery } from 'gatsby';

export default function useHomepageData() {
	const data = useStaticQuery(graphql`
		query getHomepage {
			site {
				siteMetadata {
					homepage {
						title
						description
						image {
							childImageSharp {
								fluid(maxWidth: 1500) {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		}
	`);
	return data.site.siteMetadata.homepage;
}
