import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from "../components/Header";

export default function Update() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(process.env.REACT_APP_API + `/movie/${id}`)
            ).json()
            console.log(data)
            setMovie({
                ...data,
                year: data.year.yearRel,
                genres: data.genres.map(x => x.name).join(', '),
                actors: data.actors.map(x => x.name).join(', '),
                directors: data.directors.map(x => x.name).join(', '),
            })
        })()
    }, [id])
    console.log(movie)

    const handleUpdate = (e) => {
        e.preventDefault()
        const d = e.target.elements
        console.log('Update', d)
        const splitArray = arr => arr.split(',').map(x => x.trim()).map(x => ({ name: x }))
        fetch(process.env.REACT_APP_API + `/movie/${id}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: d.title.value,
                year: {
                    yearRel: d.year.value
                },
                genres: splitArray(d.genres.value),
                actors: splitArray(d.actors.value),
                directors: splitArray(d.directors.value),
                language: d.language.value,
                runtime: d.runtime.value,
                plot: d.plot.value,
                poster: movie.poster
            })
        })
        navigate('/')
    }

    return (
        <div className='update'>
            <Header />
            <h2>Update {movie.title}</h2>
            <form className='inputAll' onSubmit={handleUpdate}>
                <input className='inputUpdate' defaultValue={movie.title} name='title' type='text' placeholder={movie.title} />
                <input className='inputUpdate' defaultValue={movie.year} name='year' type='text' placeholder={movie.year} />
                <input className='inputUpdate' defaultValue={movie.genres} name='genres' type='text' placeholder={movie.genres} />
                <input className='inputUpdate' defaultValue={movie.actors} name='actors' type='text' placeholder={movie.actors} />
                <input className='inputUpdate' defaultValue={movie.directors} name='directors' type='text' placeholder={movie.directors} />
                <input className='inputUpdate' defaultValue={movie.language} name='language' type='text' placeholder={movie.language} />
                <input className='inputUpdate' defaultValue={movie.runtime} name='runtime' type='text' placeholder={movie.runtime} />
                <input className='inputUpdate' defaultValue={movie.plot} name='plot' type='text' placeholder={movie.plot} />
                <button className='buttonUpdate' type='submit'>Update</button>
            </form>
        </div >
    )
}