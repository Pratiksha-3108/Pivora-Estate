import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { EnquireProvider } from '@/context/EnquireContext';

export const metadata: Metadata = {
  title: 'Pivora Estates | Timeless Residences & Ultra-Luxury Real Estate',
  description: 'Pivora Estates represents iconic architectural mansions, penthouses, and private coastal compounds worldwide. Discreet advisory for high-net-worth clients.',
  keywords: 'luxury real estate, private estates, penthouse, mansion, coastal villas, real estate advisory, high net worth real estate',
  openGraph: {
    title: 'Pivora Estates | Timeless Residences',
    description: 'Iconic architectural mansions, penthouses, and private coastal compounds worldwide.',
    url: 'https://pivoraestates.com',
    siteName: 'Pivora Estates',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#fcfafa] text-[#1e1b18] flex flex-col min-h-screen">
        <EnquireProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </EnquireProvider>
      </body>
    </html>
  );
}

