import Link from 'next/link'

import Layout from '../../components/Templates/Layout'
import Button from '../../components/Atoms/Button'

const App = () => (
  <Layout pagetitle="App">
    <Link href='/'>
      <button>Back to Home</button>
    </Link>
    <p>This App Page!</p>

    <Button variant="contained">Contained</Button>
    <Button variant="raised">Raised</Button>
    <Button variant="outlined">Outlined</Button>
    <Button>Text</Button>
  </Layout>
)

export default App
