import React from 'react';
import { Link } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Introduction from './components/Introduction/Introduction';
import Work from './components/Work/Work';

const App = () => {
	return( 
  <div>
    <Introduction />
    <About />
    <Work />
    <Contact />
  </div>
  )
};

export default App;