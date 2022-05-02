import React from 'react';
import PropTypes from 'prop-types';

import './styles/hello.css';

import image from './images/image.png';

function Hello({ children }) {
	return (
		<p className='hello'>
			<img src={image} width="100%" />
			Hello {children}
		</p>
	);
}

Hello.propTypes = {
	children: PropTypes.string
};

export default Hello;
