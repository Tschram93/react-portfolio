import React, { useRef, useState } from 'react';
import Email from '../../images/Email.png';
import emailjs from 'emailjs-com';
import Github from '../../images/github.png';
import Linkedin from '../../images/Linkedin.png';
import './Contact.css';

function Contact() {
	const formRef = useRef();
	const [done, setDone] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		emailjs
			.sendForm(
				'service_1ytsw5e',
				'template_sfcbbja',
				formRef.current,
				'user_FcuCFvga5RgftWtJuVMrg'
			)
			.then(
				(result) => {
					console.log(result.text);
					setDone(true);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='contact'>
			<div className='contact-bg'></div>
			<div className='contact-wrapper'>
				<div className='contact-left'>
					<h1 className='contact-title'>Feel free to contact me</h1>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img
								src={Linkedin}
								alt='Linkedin icon'
								className='contact-icon'
							/>
							<a
								href='https://www.linkedin.com/in/travis-schram-a37727217/'
								target='_blank'
								rel='noopener noreferrer'
							>
								Linkedin
							</a>
						</div>
					</div>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img
								src={Email}
								alt='Email envelope icon'
								className='contact-icon'
							/>
							<a href='mailto:Tschram93.dev@Gmail.com'>
								Email: Tschram93.dev@Gmail.com
							</a>
						</div>
					</div>
					<div className='contact-info'>
						<div className='contact-info-item'>
							<img src={Github} alt='github icon' className='contact-icon' />
							<a
								href='https://github.com/tschram93'
								target='_blank'
								rel='noreferrer'
							>
								Github: TSchram93
							</a>
						</div>
					</div>
				</div>
				<div className='contact-right'>
					<div className='contact-desc'>
						<b>Have an idea for an Application or webpage?</b>I would love to
						chat to answer any further questions or inquiries.
					</div>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input type='text' placeholder='Name' name='user_name' />
						<input type='text' placeholder='Subject' name='user_subject' />
						<input type='text' placeholder='Email' name='user_email' />
						<textarea rows='5' name='Message' placeholder='Message'></textarea>
						<button>Submit</button>
						{done && 'Thank you for your interest!'}
					</form>
				</div>
			</div>
		</div>
	);
}

export default Contact;
