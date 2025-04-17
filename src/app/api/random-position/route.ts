// src/app/api/random-position/route.ts
import {NextResponse} from 'next/server';
import {XMLParser} from 'fast-xml-parser'; //recommended by chatGPT for XML parsing

export async function GET() {
    let lat: number, lng: number;
    try {
        const res = await fetch('https://api.3geonames.org/?randomland=yes');
        const xmlText = await res.text();

        const parser = new XMLParser();
        const json = parser.parse(xmlText);
        const nearest = json?.geodata?.nearest;
        lat = parseFloat(nearest.latt);
        lng = parseFloat(nearest.longt);

        if (isNaN(lat) || isNaN(lng)) throw new Error('Invalid coordinates');
    } catch (e) {
        console.error("Failed to parse lat/lng:", e);
        lat = Math.random() * 180 - 90;
        lng = Math.random() * 360 - 180;
    }
    console.log(lat, lng);
    return NextResponse.json({lat, lng});

}