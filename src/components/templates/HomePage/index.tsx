import Layout from '@/components/templates/Layout'
import type { FC } from 'react'

import { createFirebaseApp } from '@/utils/firebase/clientApp'
import { getAuth, signOut } from 'firebase/auth'

import { NotLoggedSignScreen } from '@/components/organisms/NotLoggedSignScreen'

type Props ={
  isLogged: boolean
}

export const HomePage: FC<Props> = ({ isLogged }) => {

  const handleSignOut = () => {
    const auth = getAuth(createFirebaseApp())
    signOut(auth)
  }

  if (!isLogged) {
    return <NotLoggedSignScreen />
  }

  return (
    <Layout>
      <h1>Home</h1>
      <button
        onClick={ () => handleSignOut() }
      >
        Logout
      </button>
    </Layout>
  )
}

export default HomePage
