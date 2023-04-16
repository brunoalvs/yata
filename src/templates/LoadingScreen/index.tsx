import Image from 'next/image'
import styles from './styles.module.scss'

export const LoadingScreen = () => (
  <div className={ styles.container }>
    <section className={ styles.logo }>
      <Image src='/favicon.png' alt='Yata' width={ 60 } height={ 60 } />
      <h1>Yata</h1>
    </section>
    <p className={ styles.loading }>Loading...</p>
  </div>
)
