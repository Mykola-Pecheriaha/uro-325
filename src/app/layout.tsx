import type React from 'react';
import type { Metadata } from 'next';
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google';
import ContactsBar from '../components/ContactsBar/ContactsBar';
import Header from '../components/Header/Header';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import './globals.css';
import styles from './layout.module.css';

// Підключаємо шрифти
const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
});
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
});

// Мета-дані за замовчуванням
export const metadata: Metadata = {
  title: 'P-plastik-125 | Пластична хірургія',
  description: 'Професійні послуги уролога',
  keywords: ['пластична хірургія', 'операції', 'естетична медицина'],
  openGraph: {
    type: 'website',
    title: 'Uro-325 | Головна',
    description: 'Професійні послуги з пластичної хірургії.',
    url: 'https://p-plastik-125.com',
    siteName: 'P-plastik-125',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'P-plastik-125 - Пластична хірургія',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${styles.body}`}
      >
        <div className={styles.fixedTop}>
          <ContactsBar />
          <Header />
          <Breadcrumb />
        </div>
        <main className={styles.mainContent}>{children}</main>
      </body>
    </html>
  );
}
