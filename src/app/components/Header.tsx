import React from 'react'
import Link from "next/link";

function Header() {
    return (
        <div>

            <div className="flex space-x-4">
                <Link href='/'>Home</Link>
                <h1 className="text-4xl font-bold mb-6">Geo Search</h1>
                <Link href="/OnePlayer" className="bg-blue-500 text-white px-4 py-2 rounded button">
                    One Player
                </Link>
                <Link href="/TwoPlayer" className="bg-green-500 text-white px-4 py-2 rounded button">
                    Two Player
                </Link>
            </div>
        </div>


    );
}

export default Header
