const handleSignInErrorsMessage = (errorCode: string) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Invalid email address.'
    case 'auth/user-disabled':
      return 'This user has been disabled.'
    case 'auth/user-not-found':
      return 'This user does not exist. Please sign up.'
    case 'auth/wrong-password':
      return 'Invalid password.'
    default:
      return 'An error occurred. Please try again.'
  }
}

export default handleSignInErrorsMessage
