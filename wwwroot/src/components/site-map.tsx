import React from 'react';
import { Link } from 'react-router-dom'; 
import '../styles/components/site-map';
import './about';

export function SiteMap() {
    return (
        <nav className="app-block site-map__main py-5">
            <ul>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <a href="https://github.com/chaua0927/movie-posters">GitHub</a>
                </li>
                <li>
                    <a href="https://app.swaggerhub.com/apis-docs/chaua0927/hilbert-movie-posters/1.0.0">API Spec</a>
                </li>
            </ul>
        </nav>
    );
}