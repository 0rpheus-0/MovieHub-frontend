import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';


export default function MovieSolo() {
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(`http://localhost:8080/movie/${id}`)
            ).json()
            console.log(data)
            setMovie(data)
        })()
    }, [id])
    if (movie.poster === 'N/A') {
        movie.poster = '/cat.jpg'
    };
    const handleDelete = () => {
        fetch(`http://localhost:8080/movie/${id}`, {
            method: 'DELETE'
        })
        navigate('/')
    }
    const handlerUpdate = () => {
        navigate(`/update/${id}`)
    }
    return (
        <div className='movieSoloAll'>
            <Header />
            <solo className='movieSolo'>
                <div >
                    <img className="image" src={movie.poster} alt={movie.title} />
                    <button className="buttonSoloUpdate" onClick={handlerUpdate}>Update</button>
                    <button className="buttonSoloDelete" onClick={handleDelete}>Delete</button>
                </div>
                <div className='text'>
                    <h1>{movie.title}</h1>
                    <Link className="link" to={`/movie/year/${movie.year?.id}`}><h2>{movie.year?.yearRel}</h2></Link>
                    <h4>Plot: </h4>
                    <p>{movie.plot}</p>
                    <h4>Genres: </h4>
                    {movie.genres?.map(x => <Link className="link" key={x.id} to={`/movie/genre/${x.id}`}><li key={x.id}>{x.name}</li></Link>)}
                    <h4>Actors: </h4>
                    {movie.actors?.map(x => <Link className="link" key={x.id} to={`/movie/actor/${x.id}`}><li key={x.id}>{x.name}</li></Link>)}
                    <h4>Directors: </h4>
                    {movie.directors?.map(x => <Link className="link" key={x.id} to={`/movie/director/${x.id}`}><li key={x.id}>{x.name}</li></Link>)}
                    <h4>Language: </h4>
                    <p>{movie.language}</p>
                    <h4>Runtime: </h4>
                    <p>{movie.runtime}</p>
                </div>
            </solo >
        </div >
    )
}

