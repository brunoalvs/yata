import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 'xxx-large'
  } as React.CSSProperties,
}

export default function AppPage () {
  const { status } = useSession()
  const { push } = useRouter()

  if (status === 'loading') {
    return (
      <div style={ styles.container }>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (status === 'unauthenticated') {

    setTimeout(() => {
      push('/signin')
    }, 3000)

    return (
      <div
        style={ styles.container }>
        <p>You are not signed in.</p>
        <p>Redirecting to Sign In...</p>
      </div>
    )
  }

  return (
    <div style={ styles.container }>
      <h1>App Page</h1>
      <p>When user is Logged!</p>
    </div>
  )
}
