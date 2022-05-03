import React from 'react';
import PropTypes from 'prop-types';

function Hello({ children }) {
	return (
		<p>Hello {children}</p>
	);
}

Hello.propTypes = {
	children: PropTypes.string
};

export default Hello;
