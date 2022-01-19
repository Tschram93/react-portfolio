import React from 'react';
import './PasswordApp.css';
import PasswordAppImg from '../../assets/passwordPreview.png';

function PasswordApp() {
	return (
		<div className='p'>
			<div className='p-browser'>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
				<div className='p-circle'></div>
			</div>
			<a
				href='https://tschram93.github.io/password-generator/'
				target='_blank'
				rel='noreferrer'
			>
				<img src={ PasswordAppImg } alt='' className='p-img' />
			</a>
		</div>
	);
}

export default PasswordApp;
