import React, { useState, useEffect } from 'react';
import Movie from './Movie';
import "../Styles/Main.css";




export default function App() {
    const API_KEY="pk_edxfokgru52hn7uqu";
    
    const [movies, setMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken little');


    useEffect(() => {
        getMovies();
    }, [query]);


    const getMovies = async () => {
        
        const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${API_KEY}/{${query}}`);
        const data = await response.json();
        console.log(data.results);
        setMovies(data.results);
        

    };

    const updateSearch = e => {
        setSearch(e.target.value);
    };

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }








    return (
        <div className="wrapper">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch} />
                <button className="search-button" type="submit">Search</button>
            </form>
            <div className = "movies">
                {movies.map(movie => (
                    <Movie
                    key={movie.id}
                    id = {movie.id}
                    title={movie.title}
                    image={movie.image}
                    description={movie.description}/>
                ))}
            </div>
        </div>
    )
}
