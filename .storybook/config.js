import { configure } from '@storybook/react'
import './reset.css'

configure(require.context('../components', true, /stories\.js$/), module)
