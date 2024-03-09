import './globals.css'
import { Josefin_Sans, Poppins } from 'next/font/google'
import React from 'react'
import { Metadata } from 'next'
import GoogleAnalytics from './GoogleAnalytics'
import RootLayout from './RootLayout'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300","400", "500", "600", "700","900"],
  variable: "--font-Poppins"
})

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ["300","400", "500", "600", "700"],
  variable: "--font-Josefin"
})

export const metadata: Metadata = {
  title: 'Quizzy Học Marketing',
  description:'Kinh nghiệm 2 năm trong lĩnh vực Social Media Marketing, hiện đang là Project Manager tại 1 công ty Canada, từng là Social Media Executive tại Zing News và sỡ hữu hơn 140K followers trên các kênh Social',
  keywords: ["Quizzy Học Marketing"],
  openGraph: {
    images: 'https://res.cloudinary.com/dlqieazbj/image/upload/v1697019213/hvaspii98y8iqk3zkp64.jpg',
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html>
      {/* !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black */}
      <body className={`${poppins.variable} ${josefin.variable} bg-no-repeat duration-300`}>
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
            <GoogleAnalytics ga_id= 
            {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
          ) : null}
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
