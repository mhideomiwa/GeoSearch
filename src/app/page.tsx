import Link from "next/link";

export default function Home() {


    return (
        <>
            <div
                className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-green-400">
                <h1 className="text-5xl font-extrabold text-white mb-6 text-center">
                    Welcome to Geo Search
                </h1>
                <div className="flex space-x-6">
                    <Link
                        href="/OnePlayer"
                        className="font-semibold bg-blue-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
                    >
                        One Player
                    </Link>
                    <Link
                        href="/TwoPlayer"
                        className="font-semibold bg-green-600 text-white px-8 py-3 rounded-2xl shadow-lg hover:shadow-xl transform transition duration-300 ease-in-out hover:scale-105"
                    >
                        Two Player
                    </Link>
                </div>
            </div>
        </>
    );
}
//styling help by chatGPT