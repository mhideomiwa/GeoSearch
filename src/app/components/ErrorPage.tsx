'use server'
import React from 'react';
import Link from "next/link";

export const ErrorPage = async () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="text-center p-6 bg-white rounded-lg shadow-xl max-w-md w-full">
                <h1 className="text-6xl font-extrabold text-red-600 mb-4">Oops...</h1>
                <p className="text-xl text-gray-700 mb-6">Something went wrong. Please try again later.</p>
                <Link
                    href="/"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
                >
                    Click here to try again
                </Link>
            </div>
        </div>
    );
};
//styling help by chatGPT