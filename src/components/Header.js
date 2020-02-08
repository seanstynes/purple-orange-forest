import React from 'react';
import { Link } from 'gatsby';
import headerStyles from '../styles/components/header.module.scss';
import Logo from '../../content/images/orange.svg';

export default function Header(props) {
	return (
		<header className={headerStyles.header}>
			<Link to='/' className={headerStyles.logo}>
				<Logo></Logo>
				<h1>Purple Orange Audio</h1>
			</Link>
			<nav className={headerStyles.header__nav} role='navigation' aria-label='main navigation'>
				<Link to='/listen'>Listen</Link>

				<Link to='/posts'>Reviews &amp; Guides</Link>
				<Link to='/about-us'>About</Link>
			</nav>
		</header>
	);
}
