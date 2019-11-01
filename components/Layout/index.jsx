import Head from 'next/head'
import { HeaderSite } from './styles'
import Logo from '../Logo'
import AvatarUser from '../AvatarUser'

const url = 'https://avatars0.githubusercontent.com/u/13678214?s=460&v=4'

const MyLayout = ({ children, pagetitle }) => (
  <>
    <Head>
      <title>Yata {pagetitle}</title>
    </Head>
    <HeaderSite>
      <Logo />
      <AvatarUser />
    </HeaderSite>

    <main>{children}</main>
  </>
)

MyLayout.defaultProps = {
  pagetitle: 'Teste'
}

export default MyLayout
