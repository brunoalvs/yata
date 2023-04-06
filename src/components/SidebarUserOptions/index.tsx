import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'

import { Avatar } from '../Avatar'
import styles from './styles.module.scss'

type ListOptions = {
  name: string
  onClick: () => void
}[]

type User = {
  name: string
  email: string
  image: string
}

export const SidebarUserOptions = () => {
  const { data, status } = useSession()
  const { push } = useRouter()
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false)
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    image: ''
  })

  const listOptions: ListOptions = [
    { name: 'Settings', onClick: () => push('app/settings') },
    { name: 'Logout', onClick: () => signOut() }
  ]

  function toggleOptionsOpen() {
    setOptionsIsOpen(!optionsIsOpen)
  }

  function handleOptionClick(item: ListOptions[number]) {
    setOptionsIsOpen(false)
    item.onClick()
  }

  useEffect(() => {
    if (!data?.user) {
      return
    }

    setUser({
      name: data?.user?.name ?? '',
      email: data?.user?.email ?? '',
      image: data?.user?.image ?? ''
    })

  }, [data])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className={ styles.container }>
      <section className={ styles.userinfo } onClick={ toggleOptionsOpen }>
        <Avatar src={ user?.image } name={ user.name } />
        <div className={ styles.content }>
          <p className={ styles.username }>
            { user.name }
          </p>
          <p className={ styles.useremail }>
            { user.email }
          </p>
        </div>
      </section>
      <ul className={ styles.options } data-open={ optionsIsOpen }>
        { listOptions.map((item, index) => (
          <li
            key={ index }
            className={ styles.option }
            onClick={ () => handleOptionClick(item) }
          >
            { item.name }
          </li>
        )) }
      </ul>
      <div
        className={ styles.underlay }
        data-open={ optionsIsOpen }
        onClick={ toggleOptionsOpen }
      />
    </div>
  )
}
