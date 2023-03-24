export default function SignUpPage () {
  return (
    <>
      <header>
        <h1>Sign Up</h1>
        <section>
          <p>Already have an account? <a href='/signin'>Sign In</a></p>
        </section>
      </header>
      <div>
        <form>
          <legend>Let&apos;s get started!</legend>
          <label htmlFor='email'>Enter your Email</label>
          <input type='email' id='email' />
          <label htmlFor='password'>Create a Password</label>
          <input type='password' id='password' />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input type='password' id='confirmPassword' />
          <label htmlFor='username'>Enter a Username</label>
          <input type='text' id='username' />
          <button type='submit'>Sign Up</button>
        </form>
      </div>
      <footer>
      By creating an account, you agree to our Terms of Service. For more information about how we use your data, please read our Privacy Policy. We&apos;ll occasionally send you account related emails.
      </footer>
    </>
  )
}
