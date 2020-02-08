import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import useHomepageData from '../static_queries/useHomepageData';

export default function IndexPage(props) {
	const { title } = useHomepageData();
	return (
		<Layout page='home' bgColor='inherit'>
			{title}
			{/* <figure className='hero'>
				<Img fluid={image.childImageSharp.fluid} alt={data.frontmatter.title} />
			</figure> */}
			<section>
				<BlogList />
			</section>
		</Layout>
	);
}
