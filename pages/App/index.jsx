import MyLayout from '../../components/Layout'
import Button from '../../components/Atoms/Button'

const App = () => (
  <MyLayout pagetitle="App">
    <p>This App Page!</p>

    <Button variant="contained">Contained</Button>
    <Button variant="raised">Raised</Button>
    <Button variant="outlined">Outlined</Button>
    <Button>Text</Button>
  </MyLayout>
)

export default App
