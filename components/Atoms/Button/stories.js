import Button from './index'

export default {
  title: 'Design System|Atoms/Buttons'
}

// export const outlined = () => <Outlined>Outlined</Outlined>
export const contained = () => <Button variant="contained">Contained</Button>
export const raised = () => <Button variant="raised">Raised</Button>
export const outlined = () => <Button variant="outlined">Text Outlined</Button>
export const text = () => <Button>Text Button</Button>
export const disabled = () => (
  <Button variant="contained" disabled={true}>
    Disabled Contained
  </Button>
)
