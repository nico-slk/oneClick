// Esta será la pagina principal

// Lista de sorteos + cantidad de amigos que participan en esta.
// Lista de recomendados.
// Lista de premiums.
// Buscar sorteos.
// Sorteos cercanos a finalizar.

import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { users } from '../Datos'


export default class PrincipalPageScreen extends Component {


    render() {
        return (
            <div>
                {console.log(users)}
                <Link to="/auth/login" className="mr-3 btn btn-primary" >Login</Link>
                <Link to="/auth/register" className="mr-3 btn btn-primary" >Register</Link>

                <h1>PrincipalPage</h1>
                <ul>
                    <li><h4>Esta será la pagina principal</h4></li>
                    <li>Lista de sorteos + cantidad de amigos que participan en esta.</li>
                    <li>Lista de recomendados.</li>
                    <li>Lista de premiums.</li>
                    <li>Buscar sorteos.</li>
                    <li>Sorteos cercanos a finalizar.</li>
                </ul>
            </div>
        )
    }
}
