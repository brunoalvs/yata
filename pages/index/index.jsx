import MyLayout from '../../components/Layout'
import Layout from '../../components/Templates/Layout'

import Link from 'next/link'

const Index = ({ PageTitle }) => (
  <Layout pagetitle={PageTitle}>
    <p>This Page is named of {PageTitle}</p>
    <Link href="App">
      <button>Open App</button>
    </Link>
  </Layout>
)

Index.defaultProps = {
  PageTitle: 'Indsex'
}

export default Index
