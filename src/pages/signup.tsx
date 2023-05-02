import Institutional from '@/layouts/Institutional'
import SignUpTemplate from '@/templates/SignUp'

const SignUpPage = () => (
  <SignUpTemplate />
)

SignUpPage.getLayout = function getLayout (page) {
  return (
    <Institutional>
      { page }
    </Institutional>
  )
}

export default SignUpPage
