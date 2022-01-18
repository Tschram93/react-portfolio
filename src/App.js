import React from 'react';
import { Link } from 'react-router-dom';
import About from './components/About/About';
import Introduction from './components/Introduction/Introduction';
import Work from './components/Work/Work';

const App = () => {
	return( 
  <div>
    <Introduction />
    <About />
    <Work />
  </div>
  )
};

export default App;