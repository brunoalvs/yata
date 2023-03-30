export async function MenuUserActions () {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const response = await fetch('https://jsonplaceholder.typicode.com/users/1', { cache: 'no-store' })

  const data = await response.json()

  return (
    <div className='flex items-center'>
      <p>
        <a href='/login'>Login</a>
      </p>
      <p>
        { data.name }
      </p>
    </div>
  )
}
