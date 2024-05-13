import React, { useEffect, useState, } from 'react';
import Header from '../components/Header';
import Movie from '../components/Movie';

export default function Create() {

    const [name, setName] = useState('')
    const [nameDirty, setNameDirty] = useState(false)

    const nameHandler = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const blurHandler = (e) => {
        if (e.target.name === 'name')
            setNameDirty(true)
    }

    const [movie, setMovie] = useState({})
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/movie/name?${new URLSearchParams({ name: name })}`, {
                    method: 'POST'
                })
            ).json()
            console.log(data)
            setMovie(movie)
        })()
    }, [name])


    return (
        <div className='create' >
            <Header />
            <form className='form'>
                {nameDirty && <div style={{ color: 'red' }}></div>}
                <input onChange={nameHandler} value={name} onBlur={e => blurHandler(e)} name='name' type='text' placeholder='Enter name...' />
                <button>Create</button>
            </form>

            <Movie key={movie.id} id={movie.id} title={movie.title} posterUrl={movie.poster} year={movie.year.yearRel} genre={movie.genres[0].name} />


        </div>
    )
}