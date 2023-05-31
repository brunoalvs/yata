import type { NextPageWithLayout } from '@/pages/_app'
import AppLayout from '@/components/templates/AppLayout'

const SettingsPage: NextPageWithLayout = () => (
  <div>
    <h1>Settings</h1>
  </div>
)

SettingsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default SettingsPage
