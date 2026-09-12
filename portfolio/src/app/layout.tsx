import type { Metadata } from "next";
import { Syne, Outfit, Space_Grotesk } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paul Prince | Full-Stack Software Developer",
  description: "Full-stack software developer building scalable web systems across hospitality, fintech, healthcare, and education with React, Next.js, TypeScript, PostgreSQL, and Supabase.",
  keywords: ["Paul Prince", "Full-Stack Developer", "Software Engineer", "React", "Next.js", "TypeScript", "PostgreSQL", "Supabase", "Abuja", "Nigeria"],
  authors: [{ name: "Paul Prince" }],
  openGraph: {
    title: "Paul Prince | Full-Stack Software Developer",
    description: "Full-stack developer building scalable web applications with React, Next.js, PostgreSQL, and Supabase.",
    type: "website",
  },
};

import ShootingStarEffect from "@/components/ui/ShootingStarEffect";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${outfit.variable} ${spaceGrotesk.variable} ${syne.variable} antialiased font-sans bg-background text-foreground`}
      >
        <ShootingStarEffect />
        {children}
      </body>
    </html>
  );
}
