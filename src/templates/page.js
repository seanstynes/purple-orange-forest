import React from 'react';
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

export default function Page(props) {
	const data = props.data.markdownRemark.frontmatter;
	const html = props.data.markdownRemark.html;
	return (
		<Layout>
			<div className='page'>
				<figure className='hero'>
					<div className='inner container'>
						<h1>{data.heading}</h1>
						<p>{data.subheading}</p>
					</div>
					<Img fluid={data.hero_image.childImageSharp.fluid} alt={data.title} />
				</figure>
				<div className='pageBody' dangerouslySetInnerHTML={{ __html: html }}></div>
			</div>
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
				title
				heading
				subheading
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
