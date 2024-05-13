import { useState } from 'react';
import Advertisement from '../components/Advertisement';
import Header from '../components/Header';
import Movies from '../pages/Movies';

export default function Home() {
    const [name, setName] = useState('')
    const nameHandler = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }


    // useEffect(() => {
    //     (async () => {
    //         const data = await (
    //             await fetch(`http://localhost:8080/movie/name?${new URLSearchParams({ name: name })}`, {
    //                 method: 'POST'
    //             })
    //         ).json()
    //         console.log(data)
    //     })()
    // }, [])

    const handleCreate = () => {
        fetch(`http://localhost:8080/movie/name?${new URLSearchParams({ name: name })}`, {
            method: 'POST'
        })
        window.location.reload();
        //navigate('/')
    }

    return (
        <div className='wrapper' >
            <Header />
            <form className='form'>
                <input className='input' onChange={nameHandler} value={name} name='name' type='text' placeholder=' Enter name...' />
                <button className='button' onClick={handleCreate}>Create</button>
            </form>
            <Advertisement />
            <Movies />
        </div>
    )
}