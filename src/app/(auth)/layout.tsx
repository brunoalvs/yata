import Link from 'next/link'

import { Logo } from '@/components/Logo'
import styles from './styles.module.css'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className={ styles.wrapper }>
      <div className={ styles.container }>
        <header className={ styles.header }>
          <Link href='/'>
            <Logo title='Yata - Yes, another todo app' width={ 32 } height={ 32 } />
          </Link>
          <nav className={ styles.navigation }>
            <Link
              href='signin'
              className='hover:underline dark:text-white'
            >
                Log in
            </Link>
            <Link
              href='signup'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center'
            >
                Sign up
            </Link>
          </nav>
        </header>
        { children }
      </div>
    </div>
  )
}
