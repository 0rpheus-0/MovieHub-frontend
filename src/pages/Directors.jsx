import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Movie from '../components/Movie';

export default function Directors() {
    const { id } = useParams();
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/movie/director/${id}`)
            ).json()
            console.log(data)
            setMovies(data)
        })()
    }, [id])
    console.log(movies)

    const [director, setDirector] = useState({})
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/director/${id}`)
            ).json()
            console.log(data)
            setDirector(data)
        })()
    }, [id])
    console.log(director)
    return (
        <div className='filer'>
            <Header />
            <h2>{director.name} movies</h2>
            <main>
                {movies.map(x => (
                    <Movie key={x.id} id={x.id} title={x.title} posterUrl={x.poster} year={x.year.yearRel} genre={x.genres?.map(x => x.name)?.join(', ')} />
                ))
                }
            </ main>
        </div>
    )
}