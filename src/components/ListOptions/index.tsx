'use client'

import type { FC } from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'

export type List = {
  name: string
  onClick?: () => void
}[]

interface ListOptionsProps {
  children: React.ReactNode
  list: List
}

export const ListOptions: FC<ListOptionsProps> = ({ children, list }) => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    setIsOpen(!isOpen)
  }

  return (
    <div className={ styles.container }>
      <div onClick={ handleClick }>
        { children }
      </div>
      <ul className={ styles.options } data-open={ isOpen }>
        {
          list.map((item, index) => (
            <li key={ index } className={ styles.option } onClick={ item.onClick }>
              { item.name }
            </li>
          ))
        }
      </ul>
      <div className={ styles.underlay } data-open={ isOpen } onClick={ handleClick } />
    </div>
  )
}
