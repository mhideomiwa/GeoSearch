This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


Notes by Matthew for IS542:
My project is a version of the popular game "GeoGuessr". When the user enters the site, there are options for 1 or 2 player games. In the 2 player game, one player will close there eyes or look away for a few seconds while the other player drops a google street view peg man in a place of their choosing. Then the other player will open their eyes, and guess where the street view is, and drop a pin on it. The closer they get, the more points. The 1 player version drops the player into google street view in a random location, and they have to guess their location based on the clues they can get from looking around. To run this locally, after install, the user has to insert a .env.local file and put "NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=[YOUR_GOOGLE_MAPS_API]" This uses the Google Maps api via visgl and https://api.3geonames.org/?randomland=yes This also uses local memory to store some settings (whether they want the instructions every time or not)
