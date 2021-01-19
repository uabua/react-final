import React from 'react';
import solar_system from '../../../assets/solar_system.png';

const FactsCard = () => {
    return <div className="card home-card">
        <img src={solar_system} alt="solar system" />
        <h2 className="card-title">
            Interesting Planet Facts
        </h2>
        <div className="text-right">
            <a href="/facts" class="btn active">See more🚀</a>
       </div>
    </div>;
}

export default FactsCard;