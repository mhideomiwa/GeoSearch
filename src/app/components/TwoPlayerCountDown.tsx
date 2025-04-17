import React, {useEffect, useState} from 'react';

export const TwoPlayerCountDown = ({onComplete}: { onComplete: () => void }) => {
    const [time, setTime] = useState(5); // shorter for demo

    useEffect(() => {
        if (time <= 0) {
            const timeout = setTimeout(() => {
                onComplete(); // Notify parent to fade out
            }, 500); // Let the user see "0" briefly
            return () => clearTimeout(timeout);
        }

        const interval = setInterval(() => {
            setTime((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [time, onComplete]);

    return (
        <div
            className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-200 to-white text-black text-center">
            <div className="bg-white shadow-xl rounded-3xl px-10 py-8 border border-gray-300">
                <h1 className="text-6xl font-extrabold text-blue-700 mb-6">{time > 0 ? time : 'Go!'}</h1>
                <h2 className="text-2xl font-semibold">
                    Seeker, close your eyes!
                </h2>
            </div>
        </div>
    );
};
