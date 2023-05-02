import type { NextPageWithLayout } from './_app'

import Institutional from '@/layouts/Institutional'
import HomeTemplate from '@/templates/Home'

const IndexPage: NextPageWithLayout = () => (
  <HomeTemplate />
)

IndexPage.getLayout = function getLayout (page) {
  return (
    <Institutional>
      { page }
    </Institutional>
  )
}

export default IndexPage
