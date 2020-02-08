import React from 'react';
import Layout from '../components/Layout';
import infoStyles from '../styles/pages/info.module.scss';
import useSiteMetaData from '../static_queries/useSiteMetadata';
import { Link } from 'gatsby';

export default function Info() {
	const { infoData } = useSiteMetaData();
	return (
		<Layout page='info' bgColor={infoData.background_color}>
			<section className='containerSmall'>
				<h2>Who We Are</h2>
				<p>
					Purple Orange is a recording studio based out of Grand Rapids, Michigan. We offer full
					recording, mixing, and mastering services. To support the studio we review the gear we use to
					make records.
				</p>
				<p>Want to hire us to work on your next project?</p>
				<Link to='/contact' className='button'>
					Contact us
				</Link>
			</section>
		</Layout>
	);
}
