import React, { useContext } from 'react';
import { ThemeContext } from '../../context';
import Light from '../../images/light-bulb.png';
import Moon from '../../images/moon.png';
import './Toggle.css';

function Toggle() {
	const theme = useContext(ThemeContext);
    const handleClick = () => {
        theme.dispatch({ type: 'TOGGLE' })
    };

	return (
		<div className='toggle'>
			<img src={Light} alt='light bulb icon' className='toggle-icon' />
			<img src={Moon} alt='icon of the moon' className='toggle-icon' />
			<div className='toggle-button' onClick={ handleClick } style={{left: theme.state.darkMode ? 0 : 25}}></div>
		</div>
	);
}

export default Toggle;
