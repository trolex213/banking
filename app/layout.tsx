import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' }); // load only the latin subset to minimize the font size

// Load the full IBM Plex Serif font
const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ['400', '700'], 
  variable: '--font-ibm-plex-serif'
})

export const metadata: Metadata = {
  title: "Monexa",
  description: "Monexa is expanding the boundaries of banking for everyone.",
  icons: {
    icon: '/icons/logo.svg',
  }
};

// RootLayout acts as a global wrapper to ensure that the Inter font is consistently applied throughout all pages in the app. 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
