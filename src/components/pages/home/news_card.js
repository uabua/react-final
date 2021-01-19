import React from 'react';
import { Link } from 'react-router-dom';
import rocket from '../../../assets/rocket.png';

const NewsCard = () => {
    return <div className="card home-card">
        <img src={rocket} alt="rocket" />
        <h2 className="card-title">
            Spaceflight News
        </h2>
        <div className="text-right">
            <Link to="/news" class="btn active">See more🚀</Link>
       </div>
    </div>;
}

export default NewsCard;