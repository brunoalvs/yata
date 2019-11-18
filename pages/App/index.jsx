import Link from 'next/link'

import Layout from '../../components/Templates/Layout'

const App = ({ pageTitle}) => (
  <Layout pageTitle="Osk">
    <p>This Page is named of {pageTitle}</p>

    <Link href='/'>
      <button>Back to Home!</button>
    </Link>
  </Layout>
)

App.defaultProps = {
  pageTitle: 'Ok'
}

export default App
