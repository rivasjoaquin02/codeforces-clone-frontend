import "./globals.css";
import NavBar from "@/components/ui/NavBar/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <StrictMode>
            <html lang="en">
                <body className={inter.className}>
                    <NavBar />
                    {children}
                </body>
            </html>
        </StrictMode>
    );
}
