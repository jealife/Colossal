import { Inter } from 'next/font/google'
import './globals.css'
import Nav from '@/components/navigation/Nav'
import Head from 'next/head';


const inter = Inter({
  subsets: ['latin'], display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Colossal Mind & Cake',
  description: 'PATISSERIE & CROISSANCE PERSONNELLE. Bienvenue dans l’univers  de Colossal Mind And Cake.',
  keywords: ["Pâtisserie", "croissance", "Personnel", "Developpement"],
  openGraph: {
    icon: '/logo.png',
    images: 'https://images.unsplash.com/photo-1624225203017-77f910f61d5c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
}

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <Head>
       
      </Head>

      <body className={inter.className}>
        <header className='flex w-full flex-col  
        items-center py-5 md:py-4 fixed top-0 left-0 bg-black  '>
          <Nav />
        </header>
        {children}
      </body>
    </html>
  )
}
