import React from 'react';
import astronaut from '../../../assets/astronaut.png';

const ApodCard = () => {
    return <div className="card home-card">
        <img src={astronaut} alt="rocket" />
        <h2 className="card-title">
            Astronomy Picture or the Day
        </h2>
        <div className="text-right">
            <a href="/apod" class="btn active">See more🚀</a>
       </div>
    </div>;
}

export default ApodCard;