// src/app/api/random-position/route.ts
import { NextResponse } from 'next/server';
import { XMLParser } from 'fast-xml-parser'; //recommended by chatGPT for XML parsing

export async function GET() {
    const res = await fetch('https://api.3geonames.org/?randomland=yes');
    const xmlText = await res.text();

    const parser = new XMLParser();
    const json = parser.parse(xmlText);
    console.log("API response:", json);

    const lat = parseFloat(json.geodata.nearest.latt || '');
    const lng = parseFloat(json.geodata.nearest.longt || '');

    console.log("API returned lat/lng:", lat, lng);

    return NextResponse.json({ lat, lng });
}
