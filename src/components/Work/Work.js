import React from 'react';
import Chickenrun from '../Chickenrun/Chickenrun';
import PasswordApp from '../PasswordApp/PasswordApp';
import Space from '../Space/Space';
import './Work.css';

function Work() {
    return (
        <div className='work'>
            <div className="wl">
                <div className="wl-text">
                    <h1 className="wl-title">Past Applications</h1>
                    <p className="wl-desc">These are some examples of my past applications that I have developed.</p>
                </div>
                <div className="wl-list">
                    <Space />
                    <Chickenrun />
                    <PasswordApp />
                    {/* TODO: ADD GITHUB REPOS FOR EACH */}
                </div>
            </div>
        </div>
    )
}

export default Work;
