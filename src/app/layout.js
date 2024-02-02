import { Analytics } from '@vercel/analytics/react';
import { Inter } from "next/font/google";

import "./globals.css";
import Nav from "@/components/navigation/Nav";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/footer/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Colossal Mind & Cake",
  description:
    "PATISSERIE & CROISSANCE PERSONNELLE. Bienvenue dans l’univers  de Colossal Mind And Cake.",
  keywords: ["Colossal Mind & Cake","Pâtisserie", "croissance", "Personnel", "Developpement"],
  openGraph: {
    icon: "/logo.png",
    images:
      "https://images.unsplash.com/photo-1611497406092-4bc22c54b322?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    url: "https://colossal-mindand-cake.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <title>Colossal Mind & Cake</title>
        <meta
          name="google-site-verification"
          content="aoQMnoO7pLDZHfj-emWwo1M44mGdPA2eDwOnxmdaoY8"
        />
      </Head>
      <body className={inter.className}>
        <header
          className="flex w-full flex-col  
        items-center py-5 md:py-4 fixed top-0 left-0 bg-black/50 border-b border-slate-500/25 dark:border-slate-50/[0.06]  backdrop-blur-3xl   "
        >
          <Nav />
        </header>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
        <Footer />
          <Analytics/>
      </body>
    </html>
  );
}
