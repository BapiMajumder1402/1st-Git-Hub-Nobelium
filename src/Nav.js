import React from 'react'
import n from './Nav.module.css'

import { Link } from 'react-router-dom'

export default function Nav() {
    return (
        <nav >
            <div>LOGO</div>
            <div>

                <Link className={n.link} to='/'>Home</Link>

                <Link className={n.link} to='/Login'>Login</Link>

                <Link className={n.link} to='/About'>About</Link>

                <Link className={n.link} to='/Register'>Register</Link>

            </div>
        </nav>

    )
}
