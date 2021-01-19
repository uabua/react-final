import React from 'react';
import linkedin from '../../../assets/linkedin.png';
import github from '../../../assets/github.png';

const SocialLinks = () => {
    return <div className="soial-links-contanier">
        <h3>Contact info:</h3>
        <a href="https://www.linkedin.com/in/mariami-chakhvadze/">
            <img className="social-media" src={linkedin} alt="LinkedIn"/>
        </a>
        <a href="https://github.com/uabua">
            <img className="social-media" src={github} alt="Github"/>
        </a>
    </div>;
}

export default SocialLinks;