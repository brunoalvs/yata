'use client'

import { ButtonIcon, HeadingPage } from '@/components/common'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function AllTasksPage () {
  return (
    <section className='container'>
      <header className='header'>
        <HeadingPage>All Tasks</HeadingPage>
        <ButtonIcon title='Open options'>
          <FiMoreHorizontal />
        </ButtonIcon>
      </header>
      <section className='content'>
        <h1>List of Tasks here!</h1>
      </section>
    </section>
  )
}
