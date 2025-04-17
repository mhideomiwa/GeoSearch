import React, { useEffect } from 'react';

export const TwoPlayerInstructions = ({ setReady }: { setReady: (ready: boolean) => void }) => {
    const [showInstructions] = React.useState(true);

    useEffect(() => {
        const shouldSkip = localStorage.getItem('skipTwoPlayerInstructions');
        if (shouldSkip === 'true') {
            setReady(true); // Skip instructions and start game
        }
    }, [setReady]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            localStorage.setItem('skipTwoPlayerInstructions', 'true');
        } else {
            localStorage.removeItem('skipTwoPlayerInstructions');
        }
    };


    const handleStartGame = () => {
        setReady(true);
    };


    if (!showInstructions) return null;

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-white px-6">
            <div className="max-w-xl w-full bg-white shadow-2xl rounded-3xl p-10 border border-gray-200">
                <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">Welcome to GeoSearch</h1>

                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                    <p>In two player mode, one player will be the hider, and the other will be the seeker.</p>
                    <p>The seeker closes their eyes while the hider finds a good hiding spot on the map.  The hider will drag the peg man from the lower right of the map onto a highlighted street.</p>
                    <p>When the hider is ready, they confirm their guess, and let the seeker know.  If the screen is black, or the hider doesn&#39;t like the location, they can go back to the map with the arrow in the top left.</p>
                    <p>The seeker, then uses the clues from the street view to guess where they are.  When they are ready, they can click the map icon on the bottom right of the screen to make their guess.</p>
                    <p className="font-semibold text-center">Good luck!</p>
                </div>

                <div className="mt-10 flex justify-center">
                    <button
                        onClick={handleStartGame}
                        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                    >
                        Start Game
                    </button>
                </div>

                <div className="mt-6 flex items-center justify-center space-x-2 text-gray-600">
                    <input
                        type="checkbox"
                        id="showInstructions"
                        name="showInstructions"
                        onChange={handleOnChange}
                        className="w-4 h-4"
                    />
                    <label htmlFor="showInstructions" className="cursor-pointer select-none">
                        Don&#39;t show again
                    </label>
                </div>
            </div>
        </div>
    );
};
