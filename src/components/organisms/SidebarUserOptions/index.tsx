import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'
import Avatar from '@/components/atoms/Avatar'
import styles from './styles.module.scss'

type ListOptions = Array<{
  name: string
  onClick: () => void
}>

interface User {
  name: string
  email: string
  image: string
}

export const SidebarUserOptions = () => {
  const { push } = useRouter()
  const [optionsIsOpen, setOptionsIsOpen] = useState<boolean>(false)
  const [user] = useState<User>({
    name: 'Bruno Alves',
    email: 'hello.brunoalves@gmail.com',
    image:
      'https://lh3.googleusercontent.com/a/AGNmyxbXZDYE1t0yXIz8MraVl29kor-wU8zq-WIKajMurA=s96-c',
  })

  const listOptions: ListOptions = [
    {
      name: 'Settings',
      onClick: () => {
        push('/app/settings')
      },
    },
    {
      name: 'Logout',
      onClick: () => {
        signOut().catch((err) => {
          console.error(err)
        })
      },
    },
  ]

  function toggleOptionsOpen() {
    setOptionsIsOpen(!optionsIsOpen)
  }

  function handleOptionClick(item: ListOptions[number]) {
    setOptionsIsOpen(false)
    item.onClick()
  }

  return (
    <div className={styles.container}>
      <section
        className={styles.userinfo}
        onClick={toggleOptionsOpen}
        title="Open app settings or sign out"
      >
        <Avatar src={user?.image} name={user.name} />
        <div className={styles.content}>
          <p className={styles.username}>{user.name}</p>
          <p className={styles.useremail}>{user.email}</p>
        </div>
      </section>
      <ul className={styles.options} data-open={optionsIsOpen}>
        {listOptions.map((item, index) => (
          <li
            key={index}
            className={styles.option}
            onClick={() => {
              handleOptionClick(item)
            }}
          >
            {item.name}
          </li>
        ))}
      </ul>
      <div
        className={styles.underlay}
        data-open={optionsIsOpen}
        onClick={toggleOptionsOpen}
      />
    </div>
  )
}
