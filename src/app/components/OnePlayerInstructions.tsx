import React from 'react'

export const OnePlayerInstructions = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-6">Instructions</h1>
            <p className="text-lg mb-4"></p>
            <p className="text-lg mb-4">The hider will select a location on the map, and the guesser will try to find it.</p>
            <p className="text-lg mb-4">The guesser will receive feedback on how close they are to the hider's location.</p>
            <p className="text-lg mb-4">Good luck!</p>
        </div>
    )
}
