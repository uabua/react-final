import React from 'react';
import FactsHeader from './facts_header';
import Fact from './fact';

const Facts = () => {
    return <div className="container-fluid col-lg-8" style={{marginTop: "20px"}}>
        <FactsHeader />
        <hr />
        <Fact />
    </div>;
}

export default Facts;