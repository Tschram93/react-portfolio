import React from 'react';
import './Chickenrun.css';
import ChickenrunImg from '../../assets/chickenrun.png';

function Chickenrun() {
	return (
		<div className='p'>
			<div className='p-browser'>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
			</div>
			<a
				href='https://chicken-running.herokuapp.com/'
				target='_blank'
				rel='noreferrer'
			>
				<img src={ChickenrunImg} alt='' className='p-img' />
			</a>
			<div className='link-section'>
				<div className='repo'>
					<a href='https://github.com/maxaeon/project-2'>Github Repo</a>
				</div>
				<div className='live-page'>
					<a href='https://chicken-running.herokuapp.com/'>Live Page</a>
				</div>
			</div>
			<div>
				<p className='work-headings'>Description of role</p>
					<p className='work-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!</p>
				<p className='work-headings'>Challenges</p>
					<p className='work-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!</p>
				<p className='work-headings'>Solution</p>
					<p className='work-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ad!</p>
			</div>
		</div>
	);
}

export default Chickenrun;
