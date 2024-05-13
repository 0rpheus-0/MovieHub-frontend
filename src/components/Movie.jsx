import React from 'react';
import { Link } from 'react-router-dom';

export default function Movie({ id, title, posterUrl, year, genre }) {
    if (posterUrl === 'N/A') {
        posterUrl = '/cat.jpg'
    };
    return (
        <div className='movie'>
            <Link to={`/movie/${id}`}><img src={posterUrl} alt={title} /></Link>
            <h2>{title}</h2>
            <p>{year} {genre}</p>
        </div>
    )
}
