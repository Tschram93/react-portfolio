import React from 'react';
import Email from '../../images/Email.png';
import Github from '../../images/github.png';
import Linkedin from '../../images/Linkedin.png';
import './Contact.css';

function Contact() {
	return (
		<div className='contact'>
			<div className='contact-bg'></div>
			<div className='contact-wrapper'>
				<div className='contact-left'>
					<h1 className='contact-title'>Feel free to contact me</h1>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img src={ Linkedin } alt='Linkedin icon' className='contact-icon' />
                            <a href="https://www.linkedin.com/in/travis-schram-a37727217/" target="_blank" rel="noopener noreferrer">Linkedin</a>
						</div>
					</div>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img src={ Email } alt='Email envelope icon' className='contact-icon' />
                            <a href="mailto:Tschram93.dev@Gmail.com">Email: Tschram93.dev@Gmail.com</a>

						</div>
					</div>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img src={ Github } alt='github icon' className='contact-icon' />
                            <a
				href='https://github.com/tschram93'
				target='_blank'
				rel='noreferrer'
			>Github: TSchram93</a>
						</div>
					</div>
				</div>
				<div className='contact-right'></div>
			</div>
		</div>
	);
}

export default Contact;
