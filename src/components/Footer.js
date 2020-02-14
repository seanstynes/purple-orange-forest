import React from 'react';
import { Link } from 'gatsby';
import css from '../styles/components/footer.module.scss';
import Logo from '../../content/images/orange.svg';

export default function Footer(props) {
	return (
		<footer className='footer'>
			<section className='disclaimer container'>
				<p>
					Purple Orange Studios is a participant in the Amazon Services LLC Associates Program, an
					affiliate advertising program designed to provide a means for sites to earn advertising fees by
					advertising and linking to amazon.com.
				</p>
			</section>
		</footer>
	);
}
