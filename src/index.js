import React from 'react';
import ReactDomClient from 'react-dom/client';

import App from './components/App';

ReactDomClient
	.createRoot(document.getElementById('app'))
	.render(<App />);
