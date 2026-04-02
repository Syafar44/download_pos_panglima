import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import NextAuthProvider from '@/components/providers/SessionProvider';

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Distribusi POS Panglima v1.1.0 - Internal Only',
  description: 'Update stabil v1.1.0 (Size: 54MB). Klik untuk download aplikasi terbaru dan akses dokumentasi teknis serta panduan penggunaan.',
  // generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/app-icon.png',
        type: 'image/png',
      },
    ],
    apple: '/app-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body className="font-sans antialiased">
        <NextAuthProvider>
          {children}
          <Analytics />
        </NextAuthProvider>
      </body>
    </html>
  )
}
