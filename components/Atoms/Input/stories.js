import Input from './index'

export default {
  title: 'Design System|Atoms/Input Default'
}

export const InputDefault = () => <Input />
export const InputPassword = () => (
  <Input type="password" placeholder="Sua senha" />
)
export const InputOutlined = () => <Input variant="outlined" />
