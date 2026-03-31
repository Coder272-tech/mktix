import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "The Market Index",
  description: "Statistical intelligence for financial markets",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "sans-serif", background: "#0b0f19", color: "#e6e6e6" }}>
        {children}
      </body>
    </html>
  );
}