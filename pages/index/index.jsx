import Link from 'next/link'
import Layout from '../../components/Templates/Layout'

const Index = ({ pageTitle }) => (
  <Layout pageTitle={pageTitle}>
    <p>This Page is named of {pageTitle}</p>
    <Link href="App">
      <button>Open App</button>
    </Link>
  </Layout>
)

Index.defaultProps = {
  pageTitle: "Index",
}

export default Index
