import './globals.css'

export default async function RootLayout({ children }: { children: React.ReactNode} ) {
  return (
    <html lang='en' className='dark'>
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
        <main className='min-h-screen bg-white dark:bg-zinc-900'>{ children }</main>
      </body>
    </html>
  )
}
