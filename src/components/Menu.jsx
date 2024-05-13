import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div className='menu'>
            <Link to={'/create'} >Create movie</Link>
        </div>
    )
}