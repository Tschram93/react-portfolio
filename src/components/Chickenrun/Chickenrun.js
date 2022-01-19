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
				<img src={ ChickenrunImg } alt='' className='p-img' />
			</a>
		</div>
	);
}

export default Chickenrun;
