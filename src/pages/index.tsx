import type { NextPage } from 'next'

import { useUser } from '@/contexts/userContext'
import HomePage from '@/components/templates/HomePage'

const Home: NextPage = () => {
  const { user, loadingUser } = useUser()

  if (loadingUser) {
    return (
      <div style={{ minHeight: '100vh', fontSize: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <HomePage isLogged={ !!user } />
  )
}

export default Home
