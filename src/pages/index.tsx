import type { NextPageWithLayout } from './_app'
import { useRouter } from 'next/router'

import Institutional from '@/layouts/Institutional'
import { HeadingPage } from '@/components/atoms/HeadingPage'
import Button from '@/components/atoms/Button'

const IndexPage: NextPageWithLayout = () => {
  const { push } = useRouter()

  return (
    <>
      <HeadingPage>Yes! Another Todo App</HeadingPage>
      <p>Yata is a web application that allows you to manage your tasks in a simple and intuitive way. Stop wasting time and start achieving your goals with our Todo App.</p>
      <p>Sign up today and experience the power of efficient task management!</p>
      <Button onClick={ () => push('/app') }>
      Get Started
      </Button>
    </>
  )}

IndexPage.getLayout = function getLayout (page) {
  return (
    <Institutional>
      { page }
    </Institutional>
  )
}

export default IndexPage
