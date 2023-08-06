import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import NavBar from "@/components/ui/NavBar/NavBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { StrictMode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Codeforces Clone",
    description: "My Nextjs Project",
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
                    <AuthProvider>
                        <NavBar />
                        {children}
                    </AuthProvider>
                </body>
            </html>
        </StrictMode>
    );
}
