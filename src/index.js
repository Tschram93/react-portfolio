import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeContext, ThemeProvider } from './context';

ReactDOM.render(
	<ThemeProvider>
		<App />
	</ThemeProvider>,
	document.getElementById('root')
);
