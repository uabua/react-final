import React from 'react';
import { Link } from 'react-router-dom';
import solar_system from '../../../assets/solar_system.png';

const FactsCard = () => {
    return <div className="card home-card">
        <img src={solar_system} alt="solar system" />
        <h2 className="card-title">
            Interesting Planet Facts
        </h2>
        <div className="text-right">
            <Link to="/facts" class="btn active">See more🚀</Link>
       </div>
    </div>;
}

export default FactsCard;