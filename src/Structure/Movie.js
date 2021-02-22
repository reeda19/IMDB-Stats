import React, { useState } from 'react';
import style from './movie.module.css';
import API_KEY from '../secrets.js'

const Movie = ({ id, title, image, description }) => {
    const [details, setDetails] = useState([]);
    const [clicked, setClick] = useState(false)


    const getDetails = async () => {
        const response = await fetch(`https://imdb-api.com/en/API/Title/${API_KEY}/${id}`)
        const data = await response.json();
        setDetails(data);
        console.log(data);
    }
    const movieDetails = e => {
        e.preventDefault();
        setClick(!clicked)
        getDetails();
    };

    if (!clicked) {
        return (
            <div className={style.movie} onClick={movieDetails}>
                <h1>{title}</h1>
                <div>
                    <p>{description}</p>
                </div>
                <img src={image} alt="" className={style.image} />
            </div>
        );
    }

    else {
        return (
            <div className={style.movie} onClick={movieDetails}>
                <h1>{title}</h1>
                <ul>
                    <li>Awards: {details.awards}</li>
                    <li>IMDB Rating: {details.imDbRating}</li>
                    <li>Gross: {details.awards}</li>
                </ul>

            </div>
        );

    }
}

export default Movie;
