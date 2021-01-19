import React from 'react';
import { Link } from 'react-router-dom';
import astronaut from '../../../assets/astronaut.png';

const ApodCard = () => {
    return <div className="card home-card">
        <img src={astronaut} alt="rocket" />
        <h2 className="card-title">
            Astronomy Picture or the Day
        </h2>
        <div className="text-right">
            <Link to="/apod" class="btn active">See more🚀</Link>
       </div>
    </div>;
}

export default ApodCard;