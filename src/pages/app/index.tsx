import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { FiPlus } from 'react-icons/fi'
import type { NextPageWithLayout } from '@/pages/_app'
import App from '@/layouts/App'
import { TaskProvider } from '@/contexts/task'

const AppPage: NextPageWithLayout = () => {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'loading') {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (status === 'unauthenticated') {
    push('/signin')

    return (
      <div>
        <p>You are not signed in.</p>
        <p>Redirecting to Sign In...</p>
      </div>
    )
  }

  return (
    <TaskProvider>
      <App>
        <div>
          <h1>App Page</h1>
          <p>When user is Logged!</p>
          <label>
            <FiPlus />
            <input type='text' placeholder='Add a task' />
          </label>
        </div>
      </App>
    </TaskProvider>
  )
}

export default AppPage
