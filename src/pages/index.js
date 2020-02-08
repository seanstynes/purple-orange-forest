import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function IndexPage(props) {
	const queryData = useHomepageData();
	if (queryData[0]) {
		const data = queryData[0].node.frontmatter;
		const html = queryData[0].node.html;

		console.log(data);
		return (
			<Layout page='home' bgColor='inherit'>
				<div className='home'>
					<figure className='hero'>
						<div className='inner container'>
							<h1>{data.heading}</h1>
							<p>{data.subheading}</p>
						</div>
						<Img fluid={data.hero_image.childImageSharp.fluid} alt={data.title} />
					</figure>
					<div className='pageBody' dangerouslySetInnerHTML={{ __html: html }}></div>

					<section className='blogContainer'>
						<h1 className='centerHeading'>The Latest</h1>
						<BlogList />
					</section>
				</div>
			</Layout>
		);
	} else {
		return <></>;
	}
}

function useHomepageData() {
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
