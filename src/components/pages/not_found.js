import React from 'react';
import not_found_404 from '../../assets/not_found_404.gif';

const NotFound = () => {
    return <div className="not-found">
            <h1 style={{textAlign: "center"}}>Houston, we have a problem...</h1>
            <img src={not_found_404} alt="404 Page Not Found"/>
        </div>;
}

export default NotFound;