import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Page(props) {
	const data = props.data.markdownRemark;

	return (
		<Layout>
			<section className='container'>{data.frontmatter.title}</section>
		</Layout>
	);
}

//dynamic page query, must occur within each post context
//$slug is made available by context from createPages call in gatsby-node.js
export const getPostData = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			fields {
				slug
			}
			frontmatter {
				title
				author
				date(formatString: "MMMM Do, YYYY")
				hero_image {
					childImageSharp {
						fluid(maxWidth: 1500) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
			html
		}
	}
`;
