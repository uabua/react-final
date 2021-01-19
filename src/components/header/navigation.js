import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return <nav>
            <ul>
                <li>
                <Link className="link" to="/">Home</Link>
                </li>
                <li>
                <Link className="link" to="/about-me">About Me</Link>
                </li>
                <li>
                <Link className="link" to="/facts">Facts</Link>
                </li>
                <li>
                <Link className="link" to="/news">News</Link>
                </li>
                <li>
                <Link className="link" to="/apod">APoD</Link>
                </li>
                <li>
                <Link className="link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>;
}

export default Navigation;