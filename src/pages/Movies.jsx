import React, { useEffect, useState } from 'react';
import Movie from '../components/Movie';

export default function Movies() {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const data = await (
                await fetch("http://localhost:8080/movie")
            ).json()
            console.log(data)
            setMovies(data)
        })()
    }, [])
    console.log(movies)
    return (
        <main>
            {movies.map(x => (
                <Movie key={x.id} id={x.id} title={x.title} posterUrl={x.poster} year={x.year.yearRel} genre={x.genres?.map(x => x.name)?.join(', ')} />
            ))
            }
        </ main>
    )
}
