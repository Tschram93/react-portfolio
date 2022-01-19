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
				<img src={ SpaceImg } alt='' className='p-img' />
			</a>
		</div>
	);
}

export default Space;
