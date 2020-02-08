import React from 'react';
import { Link } from 'gatsby';
import headerStyles from '../styles/components/header.module.scss';
import Logo from '../../content/images/orange.svg';

export default function Header(props) {
	return (
		<header className={headerStyles.header}>
			<nav className={headerStyles.header__nav} role='navigation' aria-label='main navigation'>
				<Link to='/' className={headerStyles.logo}>
					<Logo></Logo>
					<h1>{props.title}</h1>
				</Link>
				<Link to='/about-us'>About</Link>
			</nav>
		</header>
	);
}
