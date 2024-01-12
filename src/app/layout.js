import Footer from '@/components/footer/Footer'
import FooterComponent from '@/components/footerTwo/FooterComponent'
import Navbar from '@/components/navbar/Navbar'
import NavbarFixed from '@/components/navbar/NavbarFixed'
import NavbarRule from '@/components/navbar/NavbarRule'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Grazroots App',
  description: 'A Good Governance Web Application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">        
        <Navbar />
        {children}
        <FooterComponent />              
      </body>
    </html>
  )
}
