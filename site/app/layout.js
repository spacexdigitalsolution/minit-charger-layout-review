import { Geist, Geist_Mono, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/layout/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://minitcharger.com"),
  title: {
    default: "Minit Charger | Fleet EV Charging Infrastructure",
    template: "%s | Minit Charger",
  },
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-zinc-950 focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#16a34a] focus:font-semibold"
        >
          Skip to main content
        </a>
        <SmoothScroll>
          <Navbar />
          <main id="main-content" tabIndex={-1} className="flex-grow">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
