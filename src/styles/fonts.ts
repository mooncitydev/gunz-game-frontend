import localFont from "next/font/local";
import { Inter, Montserrat } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const dinAlternate = localFont({
  src: [
    {
      path: "../assets/fonts/DINAlternate-Bold.woff",
    },
  ],
  display: "swap",
  variable: "--font-din-alternate",
});

export const tungsten = localFont({
  src: [
    {
      path: "../assets/fonts/Tungsten.woff",
      weight: "700",
    },
    {
      path: "../assets/fonts/Tungsten-SemiBold.woff",
      weight: "600",
    },
    {
      path: "../assets/fonts/Tungsten-Medium.woff",
      weight: "500",
    },
  ],
  display: "swap",
  variable: "--font-tungsten",
});
