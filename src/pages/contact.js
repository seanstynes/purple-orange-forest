import React, { useState } from 'react';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// import emailjs from 'emailjs-com';

import Layout from '../components/Layout';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

export default function Contact(props) {
	const [success, setSuccess] = useState(false);

	const queryData = useContactData();
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

					<section className='pageBody'>
						{success ? (
							<>
								<h2>Thanks for reaching out!</h2>
								<p>We've received your message and will be in touch shortly.</p>
							</>
						) : (
							<div>
								<h2>Say Hello</h2>
								<form name='contact' method='POST' data-netlify='true'>
									<input type='text' name='name' placeholder='Name' />
									<input type='email' name='email' placeholder='Email' />
									<textarea name='subject' placeholder='Message' />
									<GoogleReCaptchaProvider reCaptchaKey='6Ld2jtYUAAAAANW8MVmVdYwDLLRSpdSO623F7YLo'></GoogleReCaptchaProvider>
									<input type='submit' className='button' value='Send' />
								</form>
							</div>
						)}
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
