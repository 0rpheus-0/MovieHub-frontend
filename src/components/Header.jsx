import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header>
            <Link className="headerLink" to={'/'} >
                <div className='logo'>
                    <span>Movie</span>
                    <span style={{ color: 'orange' }}>Hub</span>
                </div>
            </Link>
        </header>
    )
}
