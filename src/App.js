import React, { useContext } from 'react';
import { ThemeContext } from './context';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Introduction from './components/Introduction/Introduction';
import Toggle from './components/Toggle/Toggle';
import Work from './components/Work/Work';

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

	return (
		<div style={{
      backgroundColor: darkMode ? "#222" : "#ffffff",
      color: darkMode && "#ffffff",
    }}>
				<Toggle />
				<Introduction />
				<About />
				<Work />
				<Contact />
		</div>
	);
};

export default App;
