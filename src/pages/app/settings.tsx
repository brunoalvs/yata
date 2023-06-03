import type { NextPageWithLayout } from '@/pages/_app'
import AppLayout from '@/components/templates/AppLayout'

const SettingsPage: NextPageWithLayout = () => (
  <div
    style={{
      backgroundColor: 'var(--background-secondary)',
      height: '100%',
      padding: '2rem',
      borderRadius: '1rem',
    }}
  >
    <h1>Settings</h1>

    <section></section>
  </div>
)

SettingsPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default SettingsPage
