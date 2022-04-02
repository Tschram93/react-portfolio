import React from 'react';
import './Space.css';
import SpaceImg from '../../assets/space.png';

function Space() {
	return (
		<div className='p'>
			<div className='p-browser'>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
			</div>
			<a
				href='https://letqin.github.io/space-in-your-face/'
				target='_blank'
				rel='noreferrer'
			>
				<img src={SpaceImg} alt='' className='p-img' />
			</a>
			<div className='link-section'>
				<div className='repo'>
					<a href='https://github.com/letqin/space-in-your-face'>Github Repo</a>
				</div>
				<div className='live-page'>
					<a href='https://letqin.github.io/space-in-your-face/'>Live Page</a>
				</div>
			</div>
			<div>
				<h3>Description</h3>
				<ul>
					<li>l</li>
				</ul>
			</div>
		</div>
	);
}

export default Space;
