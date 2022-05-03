import React from 'react';

import svg from './images/Apple_logo_black.svg';

function InlineImage() {
	return (
		<p>
			<img src={svg} width="300" />
		</p>
	);
}

export default InlineImage;
