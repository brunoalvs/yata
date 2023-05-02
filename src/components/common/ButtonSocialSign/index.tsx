import { RiGithubFill, RiGoogleFill } from 'react-icons/ri'
import { Button } from '@/components/common'
import styles from './styles.module.scss'

interface ButtonSocialSignProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  onClick: () => void
  provider: 'google' | 'github'
}

export const ButtonSocialSign = ({ children, onClick, provider, ...props }: ButtonSocialSignProps) => (
  <Button
    className={ styles.container }
    onClick={ onClick }
    { ...props }
  >
    { provider === 'google' && <RiGoogleFill className={ styles.icon } /> }
    { provider === 'github' && <RiGithubFill className={ styles.icon } /> }
    { children }
  </Button>
)
