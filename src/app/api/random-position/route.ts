// src/app/api/random-position/route.ts

export async function GET() {
    const res = await fetch('https://api.3geonames.org/?randomland=yes');
    const data = await res.text(); // XML string

    return new Response(data, {
        headers: { 'Content-Type': 'application/xml' }
    });
}
