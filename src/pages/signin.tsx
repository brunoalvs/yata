export default function SignInPage () {
  return (
    <>
      <header>
        <h1>Sign In</h1>
        <section>
          <p>Don&apos;t have an account? <a href='/signup'>Sign Up</a></p>
        </section>
      </header>
      <div>
        <form>
          <legend>Let&apos;s get started!</legend>
          <label htmlFor='email'>Enter your Email</label>
          <input type='email' id='email' />
          <label htmlFor='password'>Enter your Password</label>
          <input type='password' id='password' />
          <button type='submit'>Sign In</button>
        </form>
        <section>
          <p>Forgot your password? <a href='/reset-password'>Reset Password</a></p>
        </section>
      </div>
      <footer>
        By signing in, you agree to our Terms of Service. For more information about how we use your data, please read our Privacy Policy. We&apos;ll occasionally send you account related emails.
      </footer>
    </>
  )
}
