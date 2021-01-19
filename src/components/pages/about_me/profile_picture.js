import React from 'react';
import profile_pic from '../../../assets/profile_pic.jpg';

const ProfilePicture = () => {
    return <img src={profile_pic} className="img-fluid rounded-circle" alt="profile pic" style={{width: "300px"}}/>;
}

export default ProfilePicture;