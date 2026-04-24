import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { LanguageProvider } from '@/components/language-provider'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'Weliwen Ballet Folklórico Chile | Temuco',
  description: 'Academia y elenco de danza folclórica chilena en Temuco. Descubre la pasión por el folclor y la tradición de la Araucanía.',
  generator: 'v0.app',
  openGraph: {
    title: 'Weliwen | Ballet Folklórico Temuco — Chile',
    description: 'Academia y elenco de danza folclórica chilena en Temuco. Descubre la pasión por el folclor y la tradición de la Araucanía.',
    url: 'https://weliwen.cl',
    siteName: 'Weliwen Ballet Folklórico',
    images: [
      {
        url: '/og-weliwen.jpg', // Renombra tu nueva imagen y colócala en /public/og-weliwen.jpg
        width: 1200,
        height: 630,
        alt: 'Weliwen Ballet Folklórico Temuco - Chile',
      },
    ],
    locale: 'es_CL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Weliwen | Ballet Folklórico Temuco — Chile',
    description: 'Academia y elenco de danza folclórica chilena en Temuco. Descubre la pasión por el folclor y la tradición de la Araucanía.',
    images: ['/og-weliwen.jpg'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorant.variable} font-sans antialiased`}>
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
