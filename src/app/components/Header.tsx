import React from 'react'
import Link from "next/link";


function Header() {
    return (
        <>
            <div className="flex space-x-4 p-2.5 h-max-64">
                <Link href='/'>Home</Link>
                <h1 className="text-4xl font-bold mb-6">Geo Search</h1>
                <div>

                </div>
            </div>
        </>


    );
}

export default Header
