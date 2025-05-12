import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BADHUNTER",
  description: "Gamified fitness tracking for legends.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#121212", color: "#fff", fontFamily: "'Orbitron', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}