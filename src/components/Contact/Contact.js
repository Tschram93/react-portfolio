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
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Linkedin} alt="" className='contact-icon' />
                        </div>
                    </div>
				</div>
				<div className='contact-right'></div>
			</div>
		</div>
	);
}

export default Contact;
