// app/layout.tsx (or RootLayout.tsx)
import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ClientThemeProvider from "./ClientThemeProvider"; // Adjust path if needed

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Daniyaal's Portfolio",
  description: "This is a personal Showroom",
};

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
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}
