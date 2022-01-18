import React from 'react';
import { Link } from 'react-router-dom';
import Coding from '../../images/coding.jpeg';
import Resume from '../../assets/t-schram-resume.pdf';
import './About.css';

function About() {
	return (
		<div className='about'>
			<div className='about-left'>
				<div className='about-card bg'></div>
				<div className='about-card'>
					<img
						src={Coding}
						alt='background of computer code'
						className='about-image'
					/>
				</div>
			</div>
			<div className='about-right'>
				<h1 className='about-title'>About Me</h1>
				<p className='about-sub'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
					dolorem?
				</p>
				<p className='about-desc'>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
					assumenda quas magnam dignissimos minus inventore itaque quidem
					molestias sit veniam possimus autem odit, soluta aliquid cumque ea
					impedit voluptatum quia dicta deleniti sapiente modi excepturi! Ab
					libero iste illo dignissimos.
				</p>
                <div className="about-resume">
                <object data={Resume}type="application/pdf" className='about-resume-img' />
                </div>
			</div>
		</div>
	);
}

export default About;
