import React, { useState, useEffect } from 'react';
import RaffleCard from './RaffleCard';

function RaffleListWithFriends(props) {
    const [raffles, setRaffles] = useState([])

    useEffect(() => {
        setRaffles(props.raffleList)
    }, [props.raffleList])

    if (raffles) {
        return (
            <div>
                {raffles.map(r => <RaffleCard raffle={r} friends={r.friends.length} />)}
            </div>
        )
    } else {
        <h3>Loading raffles list...</h3>
    }
}

export default RaffleListWithFriends
