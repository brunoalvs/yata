import { TaskProvider } from '@/contexts/task'
import type { NextPageWithLayout } from '../_app'
import App from '@/layouts/App'

const SettingsPage: NextPageWithLayout = () => (
  <div>
    <h1>Settings</h1>
  </div>
)

SettingsPage.getLayout = function getLayout (page) {
  return (
    <TaskProvider>
      <App>
        { page }
      </App>
    </TaskProvider>
  )
}

export default SettingsPage
