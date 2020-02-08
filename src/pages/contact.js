import React, { useState } from 'react';

import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function Contact(props) {
	const queryData = useContactData();
	if (queryData[0]) {
		const data = queryData[0].node.frontmatter;
		const html = queryData[0].node.html;

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

					<section className='pageBody'>
						<h2>Say Hello</h2>
						<form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field'>
							<input type='hidden' name='bot-field' />
							<input type='hidden' name='form-name' value='contact' />
							<input type='text' name='name' placeholder='Name' />
							<input type='text' name='userEmail' placeholder='Email' />
							<textarea name='message' placeholder='Message' />
							<input type='submit' className='button' value='Send' />
						</form>
					</section>
					<div className='pageBody' dangerouslySetInnerHTML={{ __html: html }}></div>
				</div>
			</Layout>
		);
	} else {
		return <></>;
	}
}

function useContactData() {
	const data = useStaticQuery(graphql`
		query getContactData {
			allMarkdownRemark(
				sort: { order: DESC, fields: frontmatter___date }
				filter: { frontmatter: { title: { in: ["Contact"] } } }
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
