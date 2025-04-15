// app/api/random-position/route.ts
export async function GET() {
    try {
        const res = await fetch("https://api.3geonames.org/?randomland=yes");
        const data = await res.text(); // Note: response is in XML format
        return new Response(data, {
            headers: {
                'Content-Type': 'text/xml'
            }
        });
    } catch (error) {
        return new Response('Error fetching location' + error, { status: 500 });
    }
}
