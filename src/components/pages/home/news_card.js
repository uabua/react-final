import React from 'react';
import rocket from '../../../assets/rocket.png';

const NewsCard = () => {
    return <div className="card home-card">
        <img src={rocket} alt="rocket" />
        <h2 className="card-title">
            Spaceflight News
        </h2>
        <div className="text-right">
            <a href="/news" class="btn active">See more🚀</a>
       </div>
    </div>;
}

export default NewsCard;