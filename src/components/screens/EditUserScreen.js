// Aca se editará la cuenta del usuario

// - Foto de perfil
// - Nick
// - ID del usuario (@nombre_usuario)
// - Redes sociales (Instagram)
// - Eliminar cuenta
// - 
// - 

import React from 'react'
import { Link } from 'react-router-dom'

function EditUserScreen() {
    return (
        <div>
            <Link to="/" className="mr-3 btn btn-primary">Pagina principal</Link>
            <Link to="/auth/register" className="mr-3 btn btn-primary">Register</Link>
            <h3>EditUserScreen</h3>
        </div>
    )
}

export default EditUserScreen
