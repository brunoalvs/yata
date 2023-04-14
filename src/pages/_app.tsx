import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import Head from 'next/head'

import '@/styles/global.scss'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>Yata: Yes! Another Todo App</title>
        <meta name='description' content='Stay on top of your tasks and never forget anything again with our Todo App. With a user-friendly interface and a variety of features, you can organize your to-do lists and manage your time more efficiently. Get started today and boost your productivity!' />
        <meta name='keywords' content='Todo app, to-do list, productivity, task management, task organizer, organize tasks, efficient, user-friendly.' />
        <link rel='icon' href='/favicon.png' type='image/png' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
      </Head>
      <main className={ inter.className }>
        <Component { ...pageProps } />
      </main>
    </>
  )
}
