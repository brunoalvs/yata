import type { NextPageWithLayout } from '@/pages/_app'
import AppLayout from '@/components/templates/AppLayout'

const AppPage: NextPageWithLayout = () => {
  return (
    <div>
      <h1>All Tasks</h1>
      <p>When user is Logged!</p>
    </div>
  )
}

AppPage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>
}

export default AppPage
