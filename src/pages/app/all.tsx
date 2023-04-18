import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import type { NextPageWithLayout } from '../_app'
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
    setTimeout(() => {
      push('/signin')
    }, 3000)

    return (
      <div>
        <p>You are not signed in.</p>
        <p>Redirecting to Sign In...</p>
      </div>
    )
  }

  return (
    <div>
      <h1>All Tasks</h1>
      <p>When user is Logged!</p>
    </div>
  )
}

AppPage.getLayout = function getLayout (page) {
  return (
    <TaskProvider>
      <App>
        { page }
      </App>
    </TaskProvider>
  )
}

export default AppPage
