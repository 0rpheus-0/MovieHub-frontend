import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../components/Header";

export default function Update() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/movie/${id}`)
            ).json()
            console.log(data)
            setMovie(data)
        })()
    }, [id])
    console.log(movie)

    const [name, setName] = useState('')
    const nameHandler = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }
    const [year, setYear] = useState('')
    const yearHandler = (e) => {
        console.log(e.target.value)
        setYear(e.target.value)
    }
    const [genres, setGenres] = useState('')
    const genresHandler = (e) => {
        console.log(e.target.value)
        setGenres(e.target.value)
    }
    const [actors, setActors] = useState('')
    const actorsHandler = (e) => {
        console.log(e.target.value)
        setActors(e.target.value)
    }
    const [directors, setDirectors] = useState('')
    const directorsHandler = (e) => {
        console.log(e.target.value)
        setDirectors(e.target.value)
    }
    const [language, setLanguage] = useState('')
    const languageHandler = (e) => {
        console.log(e.target.value)
        setLanguage(e.target.value)
    }
    const [runtime, setRuntime] = useState('')
    const runtimeHandler = (e) => {
        console.log(e.target.value)
        setRuntime(e.target.value)
    }
    const [plot, setPlot] = useState('')
    const plotHandler = (e) => {
        console.log(e.target.value)
        setPlot(e.target.value)
    }

    const handleUpdate = () => {

    }

    return (
        <div className='update'>
            <Header />
            <h2>Update {movie.title}</h2>
            <div className='inputAll'>
                <input className='input' onChange={nameHandler} value={name} name='name' type='text' placeholder=' Enter name...' />
                <input className='input' onChange={yearHandler} value={year} name='year' type='text' placeholder=' Enter year...' />
                <input className='input' onChange={genresHandler} value={genres} name='genres' type='text' placeholder=' Enter genres...' />
                <input className='input' onChange={actorsHandler} value={actors} name='actors' type='text' placeholder=' Enter actors...' />
                <input className='input' onChange={directorsHandler} value={directors} name='directors' type='text' placeholder=' Enter directors...' />
                <input className='input' onChange={languageHandler} value={language} name='language' type='text' placeholder=' Enter language...' />
                <input className='input' onChange={runtimeHandler} value={runtime} name='runtime' type='text' placeholder=' Enter runtime...' />
                <input className='input' onChange={plotHandler} value={plot} name='plot' type='text' placeholder=' Enter plot...' />
            </div>
            <button className='button' onClick={handleUpdate}>Update</button>
        </div >
    )
}