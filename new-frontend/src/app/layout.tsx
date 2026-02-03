"use client"
import "@/old/styles/App.scss";
import "./globals.css";
import NavBar from "@/old/components/NavBar";
import "@/old/components/PageLayout/Pagelayout.scss";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import 'leaflet/dist/leaflet.css';

import { UserContextProvider } from "@/old/context/UserContextProvider";
import { useContext, useEffect } from "react";
import UserContext from "@/old/context/UserContext";
import { refreshUser } from "@/old/api/auth";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <UserContextProvider>
            <AppContent>{children}</AppContent>
        </UserContextProvider>
        </body>
        </html>
    );
}

// ✅ this runs inside the provider
function AppContent({ children }: { children: React.ReactNode }) {
    const { setUser } = useContext(UserContext);
    
    useEffect(() => {
        refreshUser().then((user) => {
            if (user) {
                setUser({
                    username: user.name || '',
                    access_token: '',
                    email: user.email,
                    isPremium: user.isPremiumUser || false,
                });
            }
        });
    }, [setUser]);
    
    return (
        <div className="page-layout">
            <NavBar />
            {children}
        </div>
    );
}
