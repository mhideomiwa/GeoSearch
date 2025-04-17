import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import {GeoSearchDataProvider} from "./context/GeoSearchDataProvider";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "@/app/components/ErrorFallback";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Geo Search",
    description: "Project for IS542 at BYU",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <GeoSearchDataProvider>
            <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
            <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>

            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Header/>
                <div
                    className="min-h-[100dvh] sm:min-h-[100dvh] h-[90dvh] px-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]"
                >
                    {children}
                </div>


            </ErrorBoundary>
            </body>
            </html>
        </GeoSearchDataProvider>
    );
}
