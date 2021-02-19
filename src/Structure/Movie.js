import React from 'react';
import style from './movie.module.css';

const Movie = ({ title, image, description }) => {
    return (
        <div className = {style.movie}>
            <h1>{title}</h1>
            <div>
                <p>{description}</p>
            </div>
            <img src={image} alt="" className = {style.image} />
        </div>
    );
}

export default Movie;
