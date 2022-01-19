import React from 'react';
import Light from '../../images/light-bulb.png';
import Moon from '../../images/moon.png';
import './Toggle.css';

function Toggle() {
	return(
    <div className='toggle'>
        <img src={Light} alt="light bulb icon" className='toggle-icon'/>
        <img src={Moon} alt="icon of the moon" className='toggle-icon'/>
        <div className="toggle-button"></div>
    </div>
    )
}

export default Toggle;
