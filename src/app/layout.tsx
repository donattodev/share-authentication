import '../styles/globals.css'
import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Roboto, Bai_Jamjuree as Bai } from 'next/font/google'

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['100', '300', '400', '500', '700', '900'],
})

const bai = Bai({
  subsets: ['latin'],
  variable: '--font-bai',
  weight: ['200', '300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Share Authentication',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} ${bai.variable} bg-gray-50 font-sans text-gray-950 antialiased dark:bg-gray-950 dark:text-gray-50`}
      >
        {children}
      </body>
    </html>
  )
}
