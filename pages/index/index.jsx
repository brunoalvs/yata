import MyLayout from '../../components/Layout'
import Link from 'next/link'

const Index = ({ PageTitle }) => (
  <MyLayout pagetitle={PageTitle}>
    <p>This Page is named of {PageTitle}</p>
    <Link href="App">
      <button>Open App</button>
    </Link>
  </MyLayout>
)

Index.defaultProps = {
  PageTitle: 'Indsex'
}

export default Index
