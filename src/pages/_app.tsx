import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

import {  LayoutProvider } from '@/contexts/layout'
import { UserProvider } from '@/contexts/userContext'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => console.log(`SW registered: ${registration}`))
          .catch((registrationError) => console.log(`SW registration failed: ${registrationError}`))
      })
    }
  }, [router.route])

  return (
    <>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <title>Next.js PWA example</title>

        <link rel='manifest' href='/manifest.json' />
        <link
          href='/icons/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link
          href='/icons/favicon-32x32.png'
          rel='icon'
          type='image/png'
          sizes='32x32'
        />
        <link rel='apple-touch-icon' href='/apple-icon.png' />
        <meta name='theme-color' content='#317EFB' />
      </Head>
      <UserProvider>
        <LayoutProvider>
          <Component { ...pageProps } />
        </LayoutProvider>
      </UserProvider>
    </>
  )
}

export default MyApp
