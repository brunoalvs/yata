import Head from 'next/head'
import { HeaderSite } from './styles'

const MyLayout = ({ children }) => (
  <>
    <Head>
      <title>Yata</title>
    </Head>

    <main>{children}</main>
  </>
)

export default MyLayout
