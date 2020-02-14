import React from 'react';
import Header from './Header';
import Helmet from 'react-helmet';
import useSiteMetadata from '../static_queries/useSiteMetadata';
import layoutStyles from '../styles/components/layout.module.scss';
import Footer from './Footer';

export default function Layout(props) {
	const { title, description } = useSiteMetadata();
	return (
		<section className={layoutStyles.Layout}>
			<Helmet>
				<html lang='en' />
				<title>{title}</title>
				<meta name='description' content={description} />
			</Helmet>
			<Header page={props.page} title={title} />
			<div className={layoutStyles.content}>{props.children}</div>
			<Footer></Footer>
		</section>
	);
}
