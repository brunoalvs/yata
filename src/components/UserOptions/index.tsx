import type { FC } from 'react'
import { Avatar } from '../Avatar'
import styles from './styles.module.scss'
import { ListOptions } from '../ListOptions'

type User = {
  name: string
  email: string
}

interface UserOptionsProps {
  user: User
}

export const UserOptions: FC<UserOptionsProps> = ({ user }) => {

  const list = [
    { name: 'Settings', onClick: () => console.log('Go to Settings') },
    { name: 'Logout', onClick: () => console.log('logout') },
  ]

  return (
    <ListOptions list={ list }>
      <div className={ styles.container }>
        <Avatar src='' name='Rafael' />
        <section className={ styles.user_info }>
          <p className={ styles.name }>{ user.name }</p>
          <p className={ styles.email }>{ user.email }</p>
        </section>
      </div>
    </ListOptions>
  )
}
