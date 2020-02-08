import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import useHomepageData from '../static_queries/useHomepageData';
import Img from 'gatsby-image';

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

					<section className='container'>
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
