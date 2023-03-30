import Link from 'next/link'
import { Logo } from '@/components/Logo'

export default function Layout ({ children }: { children: React.ReactNode }) {
  return (
    <div className='grid grid-rows-layout min-h-screen items-center'>
      <header className='w-screen flex justify-between items-center p-5'>
        <Logo title='Yata - Yes, another todo app' width={ 32 } height={ 32 } />
        <nav className='flex space-x-4 items-center'>
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
  )
}
