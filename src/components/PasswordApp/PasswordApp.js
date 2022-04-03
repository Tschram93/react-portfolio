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
				<img src={PasswordAppImg} alt='' className='p-img' />
			</a>
			<div className='link-section'>
				<div className='repo'>
					<a href='https://github.com/Tschram93/password-generator'>
						Github Repo
					</a>
				</div>
				<div className='live-page'>
					<a href='https://tschram93.github.io/password-generator/'>
						Live Page
					</a>
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

export default PasswordApp;
