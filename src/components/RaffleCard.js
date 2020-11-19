// Aca va a ir la tarjeta de cada rifa

// Datos de la rifa
// - Creador de la rifa.
// - Premio de la rifa.
// - Requisitos de la rifa.
// - Boton de participar.
// - Boton de compartir en historias.
// - Boton de compartir a contactos.
// - Boton de ocultar rifa.
// - Boton para dirigir a Instagram(u otra app)
// - Cantidad de amigos que participan en este sorteo.
// - 

import React, { useState, useEffect } from 'react'

function RaffleCard(props) {
    const [raffle, setRaffle] = useState({})

    useEffect(() => {
        setRaffle(props.raffle)
    }, [props.raffle])

    if (raffle) {
        return (
            <div>
                <div>
                    <div>
                        <img src={raffle.img} alt='reward' />
                    </div>
                    <div>
                        <span>
                            <h4>{raffle.user}</h4>
                        </span>
                        <div>
                            <h5>{raffle.requirements}</h5>
                        </div>
                        <div>
                            <button value='Participate' onClick={() => console.log('Participate')} />
                            <button value='Share in stories' onClick={() => console.log('Share in stories')} />
                            <button value='Send' onClick={() => console.log('Send')} />
                            <button value='Go to IG' onClick={() => console.log('Go to IG')} />
                        </div>
                        <div>
                            <button onClick={() => console.log('Ventana modal con linsta de amigos')} >{props.friends} participan en este sorteo</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        <h3>Loading raffle...</h3>
    }
}

export default RaffleCard
