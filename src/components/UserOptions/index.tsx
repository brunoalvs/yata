import type { FC } from 'react'
import { useEffect, useState } from 'react'
import { useSession, signOut } from 'next-auth/react'

import { Avatar } from '../Avatar'
import { ListOptions } from '../ListOptions'
import styles from './styles.module.scss'

export const UserOptions: FC = () => {
  const { data, status } = useSession()
  const [user, setUser] = useState({ name: '', email: '', image: '' })

  useEffect(() => {
    if (data?.user) {
      setUser({
        name: data?.user?.name ?? '',
        email: data?.user?.email ?? '',
        image: data?.user?.image ?? '',
      })
    }
  }, [data])

  const list = [
    { name: 'Settings', onClick: () => console.log('Go to Settings') },
    { name: 'Logout', onClick: () => signOut() },
  ]

  if (status === 'loading') {
    return <div>Skeleton loading...</div>
  }

  return (
    <ListOptions list={ list }>
      <div className={ styles.container }>
        <Avatar src={ user.image } name={ user.name } />
        <section className={ styles.user_info }>
          <p className={ styles.name }>{ user.name }</p>
          <p className={ styles.email }>{ user.email }</p>
        </section>
      </div>
    </ListOptions>
  )
}
