import './globals.css'
import Nav from './components/nav.js';
import Footer from './components/footer';
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111111"></link>
        <meta name="msapplication-TileColor" content="#ffffff"></meta>
        <meta name="theme-color" content="#111111"></meta>
        <title>Railroads Online Track Laying</title>
      </head>
      <body className={`${inter.className} bg-[#111111]`}>
        <div className="relative">
        <Nav />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  )
}
