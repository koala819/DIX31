import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavbarDIX as Navbar } from "@/components/templates/Navbar";
import { Footer } from "@/components/templates/Footer";
import { ThemeProviders } from "@/components/utils/provider";
import GoogleAnalytics from "@/components/utils/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "DIX31 - Développeur Web Indépendant Xavier | Conception de Sites Web Personnalisés",
  description:
    "Xavier de DIX31, développeur web indépendant expert en création de sites web personnalisés, landing pages, sites vitrines et solutions dynamiques. Optimisé pour les entrepreneurs et les associations, avec un accent sur l'innovation, la personnalisation et un excellent rapport qualité/prix.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='fr' suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProviders>
          <div className='min-h-screen min-w-screen'>
            <div className=' flex flex-col h-screen'>
              <nav>
                <Navbar />
              </nav>
              <main className='flex-1'>
                <div className='w-full lg:w-8/12 px-4 mx-auto mt-6'>
                  <div className='flex flex-col min-w-0 break-words w-full mb-6rounded-lg bg-gray-50 dark:bg-slate-800 border-0'>
                    <GoogleAnalytics />
                    {children}
                  </div>
                </div>
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProviders>
      </body>
    </html>
  );
}
