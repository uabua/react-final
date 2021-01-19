import React from 'react';
import apod from '../../../assets/apod.png';

const ApodHeader = () => {
    return <div className="row justify-content-center">
            <img src={apod} className="img-fluid rounded-circle w-100" alt="apod logo"/>
            <h1 style={{paddingTop: "10px", marginLeft: "20px"}}>Astronomy Picture of the Day</h1>
        </div>;
}

export default ApodHeader;