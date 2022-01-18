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
                    I am a student of Michigan State University.
				</p>
				<p className='about-desc'>
					I have experience using HTML, CSS, JavaScript, Web-API's, Third-Party API's, Node, Object-Oriented Programming, Express, MySql, Object-relational mapping, model-view-control, NoSql, React, Mongoose, and the MERN stack.
				</p>
                <div className="about-resume">
                <object data={Resume}type="application/pdf" className='about-resume-img' />
                </div>
			</div>
		</div>
	);
}

export default About;
