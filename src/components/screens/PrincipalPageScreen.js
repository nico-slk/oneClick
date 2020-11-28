// Esta será la pagina principal

// Lista de sorteos + cantidad de amigos que participan en esta.
// Lista de recomendados.
// Lista de premiums.
// Buscar sorteos.
// Sorteos cercanos a finalizar.

import React, { Component } from 'react'

export default class PrincipalPageScreen extends Component {


    render() {
        return (
            <div>
                <h1>PrincipalPage</h1>
                <ul>
                    <li><h4>Esta será la ulagina principal</h4></li>
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
