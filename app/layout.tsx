import './globals.css'
import { Amatic_SC, Montserrat } from "next/font/google";


export const headerFont = Amatic_SC({
  subsets: ['latin'],
  variable: '--font-amatic',
  weight: ['400', '700']
})

export const bodyFont = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: [],
});


export const metadata = {
  title: 'Montelongo.Dev',
  description: 'Sam Montelongo, Backend Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${headerFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  )
}
