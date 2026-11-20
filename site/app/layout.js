import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata = {
  title: "Minit Charger | Fleet EV Charging Infrastructure",
  description: "One charger for your entire fleet. Eliminating daily operational bottlenecks from airport ramps to warehouse floors.",
  icons: {
    icon: [
      { url: "/assets/_global/root-layout/icons/minit-charger-browser-shortcut-icon.ico" },
      { url: "/assets/_global/root-layout/icons/minit-charger-browser-favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/_global/root-layout/icons/minit-charger-browser-favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/_global/root-layout/icons/minit-charger-ios-home-screen-icon.png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-zinc-900">
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
