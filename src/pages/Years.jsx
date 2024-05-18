import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Movie from '../components/Movie';

export default function Years() {
    const { id } = useParams();
    const [movies, setMovies] = useState([])
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(process.env.REACT_APP_API + `/movie/year/${id}`)
            ).json()
            console.log(data)
            setMovies(data)
        })()
    }, [id])
    console.log(movies)

    const [year, setYear] = useState({})
    useEffect(() => {
        (async () => {
            const data = await (
                await fetch(process.env.REACT_APP_API + `/year/${id}`)
            ).json()
            console.log(data)
            setYear(data)
        })()
    }, [id])
    console.log(year)
    return (
        <div className='filer'>
            <Header />
            <h1>Movie of {year.yearRel}</h1>
            <main>
                {movies.map(x => (
                    <Movie key={x.id} id={x.id} title={x.title} posterUrl={x.poster} year={x.year.yearRel} genre={x.genres?.map(x => x.name)?.join(', ')} />
                ))
                }
            </ main>
        </div>
    )
}