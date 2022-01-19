import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Introduction from './components/Introduction/Introduction';
import Toggle from './components/Toggle/Toggle';
import Work from './components/Work/Work';

const App = () => {
	return (
		<div>
				<Toggle />
				<Introduction />
				<About />
				<Work />
				<Contact />
		</div>
	);
};

export default App;
