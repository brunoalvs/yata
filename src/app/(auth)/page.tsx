import Link from 'next/link'

const styles = {
  section: 'flex justify-center items-center flex-col gap-4',
  title: 'text-2xl font-bold dark:text-white',
  text: 'text-gray-200',
  button: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
}

export default function Home() {
  return (
    <section className={ styles.section + ' h-fit' }>
      <h1 className={ styles.title }>
        Welcome to Yata!
      </h1>
      <p className={ styles.text }>
        Yata is a web application that allows you to manage your tasks in a simple and intuitive way.
      </p>
      <Link href='/app' className={ styles.button }>
        Get Started
      </Link>
    </section>
  )
}
