import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshay | Software Developer",
  description:
    "A clean software developer portfolio for Lakshay, featuring projects, skills, GitHub, and contact links.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
