import React from 'react';
import { Link } from 'react-router-dom';
import About from './components/About/About';
import Introduction from './components/Introduction/Introduction';

const App = () => {
	return( 
  <div>
    <Introduction />
    <About />
  </div>
  )
};

export default App;