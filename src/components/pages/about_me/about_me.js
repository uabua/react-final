import React from 'react';
import ProfileInfo from './profile_info';
import ProfilePicture from './profile_picture';
import SocialLinks from './social_links';
import MyApod from './my_apod';


const AboutMe = () => {
    return <div className="content flex-container">
                <div className="w-400 flex-child">
                    <ProfilePicture />
                    <ProfileInfo />
                    <SocialLinks />
                </div>

                <div className="flex-child">
                    <MyApod />
                </div>
        </div>;
}

export default AboutMe;