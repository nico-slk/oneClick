// Pagina de logueo/inicio

// E-mail.
// Contraseña.
// Resetar contraseña.
// Iniciar sesión con IG.

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function LogInScreen() {
    const [state, setState] = useState({})

    const handleChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(state)
    }

    return (
        <div>
            <h1>Pagina de logueo/inicio</h1>
            <ul>
                <li><h4>Esta será la pagina principal</h4></li>
                <li>E-mail.</li>
                <li>Contraseña.</li>
                <li>Resetar contraseña.</li>
                <li>Iniciar sesión con IG.</li>
            </ul>
            <Link to="/" className="mr-3 btn btn-primary">Pagina principal</Link>
            <Link to="/auth/register" className="mr-3 btn btn-primary">Register</Link>
            <form onSubmit={handleSubmit} >
                <h3>Iniciar sesión</h3>
                <input type="text" placeholder="Cuenta de usuario o email" name="user" onChange={handleChange} required />
                <input type="password" placeholder="Contraseña" name="password" onChange={handleChange} required />
                <input type="submit" value="Enviar" />
                <input type="button" value="Crear cuenta" onClick={() => console.log('Crear cuenta')} />
                <Link to="/resetpassword" ><p>¿Olvidaste la contraseña?</p></Link>
                <input type="button" value="Iniciar sesión con Instagram" onClick={() => console.log('Iniciar sesion con Instagram')} />
            </form>
        </div>
    )
}

export default LogInScreen
