import React, { useState, useEffect } from 'react';

const NewsData = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    
    useEffect(() => {
      fetch("https://test.spaceflightnewsapi.net/api/v2/articles")
        .then(res => res.json())
        .then(
          (result) => {
            setData(result);
            setIsLoaded(true);
            console.log(result);
          },
          (error) => {
            setError(error);
            setIsLoaded(true);
          }
        )
    }, [])
  
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return data.map(news => (
            <div className="card news">
              <img src={news.imageUrl} alt="news" />
              <div className="content">
                <h2 className="content-title" style={{height: "60px"}}>
                  {news.title}
                </h2>
                <p className="text-muted" style={{textAlign: "justify", height: "60px"}}>
                  {news.summary.length > 120 ?  news.summary.substring(0, 120) + "..." : news.summary}
                </p>
                <div className="text-right">
                  <a href={news.url} class="btn btn-primary">Read more</a>
                </div>
            </div>
           </div>
        ));
    }
  }
  
  export default NewsData;