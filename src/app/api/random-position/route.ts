// src/app/api/random-position/route.ts

export async function GET() {
    const TestLocation =  () => {
        const res = await fetch('https://api.3geonames.org/?randomland=yes');
        const data = await res.text(); // XML string
        const sv = new google.maps.StreetViewService();

        const xmlText =  data;

        // Parse the XML string
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");

        // Extract <lat> and <lng> elements
        const lat = parseFloat(xmlDoc.getElementsByTagName("latt")[0]?.textContent || "");
        const lng = parseFloat(xmlDoc.getElementsByTagName("longt")[0]?.textContent || "");

        console.log("Parsed lat/lng: ", lat, lng);
        sv.getPanorama({
            location: new google.maps.LatLng(lat, lng),
            radius: 50,
        }, (data, status) => {
            if (status === google.maps.StreetViewStatus.OK) {
                console.log("Street View data found.");
                return { lat, lng };
            } else {
                console.error("Street View data not found.");
                return null;
            }
        })
    }

    if(TestLocation() !== null) {
        console.log("Test location found");

    }



}
