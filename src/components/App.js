import React from 'react';
import SimpleReactLibrary from 'simple-react-library';

import Hello from './Hello';
import Style from './Style';
import Image from './Image';
import InlineImage from './InlineImage';

function App() {
	return (
		<>
			<Hello>Universe</Hello>
			<Style />
			<Image />
			<InlineImage />
			<SimpleReactLibrary />
		</>
	);
}

export default App;
