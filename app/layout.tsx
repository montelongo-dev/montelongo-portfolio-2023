import { headers } from 'next/headers';
import './globals.css'
import { Amatic_SC, Montserrat } from "next/font/google";
import Nav from '@/components/Nav';


export const urlPath = (): string => {
  const headersList = headers();
  const fullUrl = headersList.get('referer') || "";
  const urlArray = fullUrl.split('/')
  return urlArray[urlArray.length - 1]
}


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
  description: 'I’m Sam Montelongo, an experienced Web Developer specializing in creating dynamic web applications.',
}


export default function RootLayout(
  { children, }: { children: React.ReactNode }
) {
  return (
    <html lang="en" className={`${headerFont.variable} ${bodyFont.variable}`}>
      <head>
        <meta property="og:url" content="https://montelongo.dev" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Montelongo.Dev" />
        <meta property="og:description" content="I’m Sam Montelongo, an experienced Web Developer specializing in creating dynamic web applications." />
        <meta property="og:image" content="https://montelongo.dev/images/montelongo_dev_og.png" />
      </head>
      <body>
        {urlPath() === 'contact-success' ? "" : <Nav />}
        {children}
      </body>
    </html>
  )
}
