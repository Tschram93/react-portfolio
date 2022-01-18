import React from 'react';
import Coding from '../../images/coding.jpeg';
import './About.css';

function About() {
	return (
		<div className='about'>
			<div className='about-left'>
                <div className="about-card"></div>
                <div className="about-card">
                    <img src={Coding} alt="" className="about-image" />
                </div>
            </div>
			<div className='about-right'></div>
		</div>
	);
}

export default About;
