import Institutional from '@/layouts/Institutional'
import SignInTemplate from '@/templates/SignIn'

const SignInPage = () => (
  <SignInTemplate />
)

SignInPage.getLayout = function getLayout (page) {
  return (
    <Institutional>
      { page }
    </Institutional>
  )
}

export default SignInPage
