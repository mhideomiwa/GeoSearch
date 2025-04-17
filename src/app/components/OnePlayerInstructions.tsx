import React, {useEffect} from 'react';

export const OnePlayerInstructions = ({setReady}: { setReady: (ready: boolean) => void }) => {
    const [showInstructions] = React.useState(true);

    useEffect(() => {
        const shouldSkip = localStorage.getItem('skipOnePlayerInstructions');
        if (shouldSkip === 'true') {
            setReady(true); // Skip instructions and start game
        }
    }, [setReady]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;
        if (isChecked) {
            localStorage.setItem('skipOnePlayerInstructions', 'true');
        } else {
            localStorage.removeItem('skipOnePlayerInstructions');
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
                    <p>In one player mode, you will be put in a random location. Look around and try to find clues to
                        where you are.</p>
                    <p>When you&#39;re ready to guess where you are, click the map icon at the bottom right of the
                        screen.</p>
                    <p>Click or tap on the map where you think you&#39;re located, and when you&#39;re ready, click to
                        confirm your guess.</p>
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
