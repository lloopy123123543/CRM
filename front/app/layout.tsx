"use client"
import './globals.css'
import { Inter } from 'next/font/google'
import HEADER from './components/header'
import { motion, AnimatePresence } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <HEADER></HEADER>
        <AnimatePresence>
          <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              >
          {children}
          </motion.div>
        </AnimatePresence>
        </body>
    </html>
  )
}
