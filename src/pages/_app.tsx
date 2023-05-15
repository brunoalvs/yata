import type { ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'

import GlobalStyle from '@/components/globalStyles'

const inter = Inter({ display: 'swap', subsets: ['latin'] })

export type NextPageWithLayout<P = Record<string, never>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactNode) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

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
      <GlobalStyle />
      <main
        key={ router.route }
        className={ inter.className }
      >
        <SessionProvider>
          { getLayout(<Component { ...pageProps } />) }
        </SessionProvider>
      </main>
    </>
  )
}
