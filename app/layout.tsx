import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import RootLayoutWrapper from "@/components/layout/RootLayoutWrapper";
import "./globals.css";
import AnnouncementModal from "@/components/Modal";
 import { client } from "@/sanity/lib/client";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SG Gaststätte",
  description: "Vereinsgaststätte SG Dietzenbach",
  icons: {
    icon: '/favicon.png',
  }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const announcement = await client.fetch(`*[_type == "announcement"][0]`);

  return (
    <html lang="de" suppressHydrationWarning>
      <body>
        <RootLayoutWrapper>
          <AnnouncementModal data={announcement?.announcement} />
          {children}
        </RootLayoutWrapper>
      </body>
    </html>
  );
}