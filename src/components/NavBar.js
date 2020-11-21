// Logo + nombre + dropdown del usuario

import React from 'react'
import logo from '../click.png';

function NavBar(props) {
    return (
        <div>
            <header>
                <img src={logo} alt='logo' />
                <div>
                    <h2>OneClick</h2>
                </div>
            </header>
        </div>
    )
}

export default NavBar
