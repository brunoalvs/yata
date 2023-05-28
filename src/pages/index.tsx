import type { NextPageWithLayout } from './_app'
import { useRouter } from 'next/router'

import HeadingPage from '@/components/atoms/HeadingPage'
import Button from '@/components/atoms/Button'
import Institutional from '@/components/templates/Institutional'

const IndexPage: NextPageWithLayout = () => {
  const { push } = useRouter()

  const handleGetStarted = (): void => {
    push('/signup').catch((err) => {
      console.error(err)
    })
  }

  return (
    <>
      <HeadingPage>Yes! Another Todo App</HeadingPage>
      <p>
        Yata is a web application that allows you to manage your tasks in a
        simple and intuitive way. Stop wasting time and start achieving your
        goals with our Todo App.
      </p>
      <p>
        Sign up today and experience the power of efficient task management!
      </p>
      <Button onClick={handleGetStarted}>Get Started</Button>
    </>
  )
}

IndexPage.getLayout = function getLayout(page) {
  return <Institutional>{page}</Institutional>
}

export default IndexPage
