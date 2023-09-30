import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HiChaty',
  description: 'HiChaty is a user-friendly messaging app that enables seamless communication and connection between users. With a sleek and intuitive interface, HiChaty offers real-time messaging, group chats, multimedia sharing, and more, making it the perfect platform for staying in touch with friends, family, and colleagues. ',
  icons: {
    icon: "./images/active_chat_logo.svg"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
