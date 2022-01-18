import React from 'react';
import { Link } from 'react-router-dom';
import Chickenrun from '../Chickenrun/Chickenrun';
import Space from '../Space/Space';
import './Work.css';

function Work() {
    return (
        <div className='work'>
            <div className="wl">
                <div className="wl-text">
                    <h1 className="wl-title">Name of Application</h1>
                    <p className="wl-desc">Description of Application will go here. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, perspiciatis?</p>
                </div>
                <div className="wl-list">
                    {/* <PastWork />   Create past work component for each past application and insert it here as a react element/component */}
                </div>
            </div>
        </div>
    )
}

export default Work;
