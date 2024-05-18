import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Movie from '../components/Movie';

export default function Actors() {
    const { id } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(process.env.REACT_APP_API + `/movie/actor/${id}`)
            ).json()
            console.log(data)
            setMovies(data)
        })()
    }, [id])
    console.log(movies)

    const [actor, setActor] = useState({})
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(process.env.REACT_APP_API + `/actor/${id}`)
            ).json()
            console.log(data)
            setActor(data)
        })()
    }, [id])
    console.log(actor)
    return (
        <div className='filer'>
            <Header />
            <h2>Movies with {actor.name}</h2>
            <main>
                {movies.map(x => (
                    <Movie key={x.id} id={x.id} title={x.title} posterUrl={x.poster} year={x.year.yearRel} genre={x.genres?.map(x => x.name)?.join(', ')} />
                ))
                }
            </ main>
        </div>
    )
}