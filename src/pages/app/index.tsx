import type { NextPageWithLayout } from '@/pages/_app'
import { FiPlus } from 'react-icons/fi'
import { TaskProvider } from '@/contexts/task'
import AppLayout from '@/components/templates/AppLayout'
import HeadingPage from '@/components/atoms/HeadingPage'

const AppPage: NextPageWithLayout = () => (
  <div>
    <HeadingPage>App Page</HeadingPage>
    <p>When user is Logged!</p>
    <label>
      <FiPlus />
      <input type="text" placeholder="Add a task" />
    </label>
  </div>
)

AppPage.getLayout = function getLayout(page) {
  return (
    <TaskProvider>
      <AppLayout>{page}</AppLayout>
    </TaskProvider>
  )
}

export default AppPage
