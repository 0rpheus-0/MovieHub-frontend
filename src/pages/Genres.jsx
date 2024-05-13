import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Movie from '../components/Movie';

export default function Genres() {
    const { id } = useParams();
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/movie/genre/${id}`)
            ).json()
            console.log(data)
            setMovies(data)
        })()
    }, [id])
    console.log(movies)

    const [genre, setGenre] = useState({})
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/genre/${id}`)
            ).json()
            console.log(data)
            setGenre(data)
        })()
    }, [id])
    console.log(genre)
    return (
        <div className='filer'>
            <Header />
            <h2>{genre.name} movies</h2>
            <main>
                {movies.map(x => (
                    <Movie key={x.id} id={x.id} title={x.title} posterUrl={x.poster} year={x.year.yearRel} genre={x.genres?.map(x => x.name)?.join(', ')} />
                ))
                }
            </ main>
        </div>
    )
}