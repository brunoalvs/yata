import type { NextPageWithLayout } from '@/pages/_app'
import { TaskProvider } from '@/contexts/task'
import AppLayout from '@/components/templates/AppLayout'

const SettingsPage: NextPageWithLayout = () => (
  <div>
    <h1>Settings</h1>
  </div>
)

SettingsPage.getLayout = function getLayout (page) {
  return (
    <TaskProvider>
      <AppLayout>
        {page}
      </AppLayout>
    </TaskProvider>
  )
}

export default SettingsPage
