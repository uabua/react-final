import React, { useState, useEffect } from 'react';

const ApodData = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  var date = props.date ? props.date: new Date().toISOString().split("T")[0];

  useEffect(() => {
    fetch("https://apodapi.herokuapp.com/api/?date=" + date)
      .then(res => res.json())
      .then(
        (result) => {
          setData(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      )
  }, [date])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return <div className="card w-800">
        {data.media_type === "image" ? <img src={data.url} alt="apod" style={{width: "780px"}} /> : 
        <iframe width="780px" height="400px" src={data.url} title="apod">
        </iframe>}
        <p>Copyright © {data.copyright}</p> 
        <h2 style={{textAlign: "center"}}>{data.title}</h2>
        <p style={{textAlign: "justify"}}>{data.description}</p>
        {data.media_type === "image" ? <h4>For HD APoD <a href={data.hdurl}>click here!</a>✨</h4> : ""}
    </div>;
  }
}

export default ApodData;