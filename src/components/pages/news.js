import React from 'react';
import NewsData from '../apis/news_data';

const News = () => {
    return <div style={{textAlign: "center"}}>
        <h1>Spaceflight News🚀</h1>
        <div className="row justify-content-center">
            <NewsData />
        </div>
    </div>;
}

export default News;