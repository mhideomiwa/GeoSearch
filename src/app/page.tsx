import Link from "next/link";

export default function Home() {
  return (
      //Main page.  Welcome to Geo Search with two buttons.  One for one player, one for two players
    <>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Welcome to Geo Search</h1>
            <div className="flex space-x-4">
                <Link href="/OnePlayer" className="bg-blue-500 text-white px-4 py-2 rounded button">
                    One Player
                </Link>
                <Link href="/TwoPlayer" className="bg-green-500 text-white px-4 py-2 rounded button">
                    Two Player
                </Link>
            </div>
        </div>
    </>
  );
}
