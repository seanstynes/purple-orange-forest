import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import useHomepageData from '../static_queries/useHomepageData';
import Img from 'gatsby-image';

export default function IndexPage(props) {
	const queryData = useHomepageData();
	if (queryData[0]) {
		const data = queryData[0].node.frontmatter;
		console.log(data);
		return (
			<Layout page='home' bgColor='inherit'>
				<figure className='hero'>
					<div className='inner container'>
						<h1>{data.heading}</h1>
						<p>{data.subheading}</p>
					</div>
					<Img fluid={data.hero_image.childImageSharp.fluid} alt={data.title} />
				</figure>
				<section>
					<BlogList />
				</section>
			</Layout>
		);
	} else {
		return <></>;
	}
}
