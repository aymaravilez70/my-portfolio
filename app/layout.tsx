import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aymar Aviles - Desarrollador Web',
  description: 'Portafolio profesional de desarrollo web.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ParticlesBackground /> {/* 🌟 Fondo animado */}
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
