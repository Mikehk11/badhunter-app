import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BADHUNTER",
  description: "Fitness Quest App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "black", color: "white" }}>{children}</body>
    </html>
  );
}