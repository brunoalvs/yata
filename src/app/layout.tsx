import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

export default async function RootLayout({ children }: { children: React.ReactNode} ) {
  return (
    <html lang='en' className={ inter.className }>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Yes, another todo app' />
        <meta name='keywords' content='todo, app, nextjs, typescript, offline' />
        <meta name='theme-color' content='#000000' />
        <title>Yata</title>

        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
        <main data-theme='dark'>{ children }</main>
      </body>
    </html>
  )
}
