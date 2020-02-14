import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function IndexPage(props) {
	const queryData = usePostsData();
	if (queryData[0]) {
		const data = queryData[0].node.frontmatter;
		const html = queryData[0].node.html;

		console.log(data);
		return (
			<Layout page='home' bgColor='inherit'>
				<div className='page posts'>
					<figure className='hero'>
						<div className='inner container'>
							<h1>{data.heading}</h1>
							<p>{data.subheading}</p>
						</div>
						<Img fluid={data.hero_image.childImageSharp.fluid} alt={data.title} />
					</figure>

					<section className='padding container'>
						<BlogList />
					</section>
				</div>
			</Layout>
		);
	} else {
		return <></>;
	}
}

function usePostsData() {
	const data = useStaticQuery(graphql`
		query getPostsData {
			allMarkdownRemark(
				sort: { order: DESC, fields: frontmatter___date }
				filter: { frontmatter: { title: { in: ["Posts"] } } }
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
