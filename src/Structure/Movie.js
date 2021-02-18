import React from 'react';

const Movie = ({ title, image, description }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Movie;
