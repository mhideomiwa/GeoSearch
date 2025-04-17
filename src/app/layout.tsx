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
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Header/>
                {children}
            </ErrorBoundary>
            </body>
            </html>
        </GeoSearchDataProvider>
    );
}
