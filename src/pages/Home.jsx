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

    const handleCreate = () => {
        fetch(process.env.REACT_APP_API + `/movie/name?${new URLSearchParams({ name: name })}`, {
            method: 'POST'
        })
        //navigate('/')
        window.location.reload();
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