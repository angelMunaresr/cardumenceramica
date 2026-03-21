import type { Metadata } from "next";
import { Work_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { ScrollToTop } from "@/components/ScrollToTop";

const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-serif', // Keeping variable name --font-serif for backward compatibility in Tailwind classes
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cardumen Cerámica | Artisanal Pottery from Mar del Plata",
  description: "Handcrafted ceramics by Celeste Cañete in Mar del Plata, Argentina. Explore our gallery, workshops, and custom orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${workSans.variable} ${montserrat.variable} scroll-smooth`}>
      <body className={`font-sans bg-brandBackground text-gray-900 antialiased selection:bg-primary/20 selection:text-primary min-h-screen`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
