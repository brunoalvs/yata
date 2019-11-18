import Head from 'next/head'
import Link from 'next/link'

import CardContainer from '../../Atoms/CardContainer'
import { Grid } from './styles'

import { WrappedLogo } from '../../Atoms/Logo'
import UserAvatar from '../../Atoms/UserAvatar'

function LayoutDefault({ pageTitle, children }) {
  return (
    <>
      <Head>
        <title>Yada {pageTitle}</title>
      </Head>
      <Grid>
        <header>
          <Link href="/">
            <a>
              <WrappedLogo widthSize="120px" />
            </a>
          </Link>
          <div>
            <UserAvatar />
          </div>
        </header>
        <section className="content">
          <CardContainer>
            { children }
          </CardContainer>
        </section>
      </Grid>
    </>
  )
}

export default LayoutDefault
