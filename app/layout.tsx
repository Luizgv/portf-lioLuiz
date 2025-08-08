import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luiz Gustavo - Desenvolvedor | Futuro Product Owner',
  description: 'Portfólio profissional de Luiz Gustavo, desenvolvedor front-end e futuro Product Owner especializado em criar experiências digitais funcionais e atraentes.',
  keywords: ['Luiz Gustavo', 'Product Owner', 'Desenvolvedor Front-End', 'React', 'Next.js', 'Desenvolvedor Web'],
  authors: [{ name: 'Luiz Gustavo' }],
  creator: 'Luiz Gustavo',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://luizgustavo.dev',
    title: 'Luiz Gustavo - Desenvolvedor | Futuro Product Owner',
    description: 'Portfólio profissional de Luiz Gustavo, desenvolvedor front-end e futuro Product Owner.',
    siteName: 'Luiz Gustavo Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luiz Gustavo - Desenvolvedor | Futuro Product Owner',
    description: 'Portfólio profissional de Luiz Gustavo, desenvolvedor front-end e futuro Product Owner.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <ThemeProvider>
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}
