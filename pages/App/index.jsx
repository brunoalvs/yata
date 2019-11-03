import MyLayout from '../../components/Layout'
import Button, { Outlined, Contained } from '../../components/Atoms/Button'

const App = () => (
  <MyLayout pagetitle="App">
    <p>This App Page!</p>
    <Outlined>Outlined</Outlined>
    <Button>Button</Button>
    <Contained>Contained</Contained>
  </MyLayout>
)

export default App
