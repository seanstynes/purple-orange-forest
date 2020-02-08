import React from 'react';
import Layout from '../components/Layout';
import BlogList from '../components/BlogList';
import useSiteMetadata from '../static_queries/useSiteMetadata';

export default function IndexPage() {
	const { title, description } = useSiteMetadata();

	return (
		<Layout page='home' bgColor='inherit'>
			{title}

			<section>
				<BlogList />
			</section>
		</Layout>
	);
}
