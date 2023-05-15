import type { NextPageWithLayout } from '@/pages/_app'
import { useSession } from 'next-auth/react'
import { TaskProvider } from '@/contexts/task'
import AppLayout from '@/components/templates/AppLayout'

const AppPage: NextPageWithLayout = () => {
  const { data } = useSession()

  return (
    <div>
      <h1>All Tasks</h1>
      <p>When user is Logged!</p>
      <code>
        { JSON.stringify({
          'user': {
            'name': data?.user?.name,
            'email': data?.user?.email,
            'image': data?.user?.image,
            'id': data?.user?.id
          }
        }, null, 2) }
      </code>
    </div>
  )
}

AppPage.getLayout = function getLayout (page) {
  return (
    <TaskProvider>
      <AppLayout>
        { page }
      </AppLayout>
    </TaskProvider>
  )
}

export default AppPage
