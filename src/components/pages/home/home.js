import React from 'react';
import FactsCard from './facts_card';
import NewsCard from './news_card';
import ApodCard from './apod_card';

const Home = () => {
    return <div style={{textAlign: "center"}}>
        <h1>Welcome here!</h1>
        <h5>Nice to meet you!✨ This website is my final project for React course of my university. I hope you like it.⭐</h5>
        <div className="row justify-content-center">
            <FactsCard />
            <NewsCard />
            <ApodCard />
        </div>
    </div>;
}

export default Home;