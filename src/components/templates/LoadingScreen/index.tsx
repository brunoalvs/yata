import { memo } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

const LoadingScreen = () => (
  <div className={ styles.container }>
    <section className={ styles.logo }>
      <Image src='/favicon.png' alt='Yata' width={ 60 } height={ 60 } priority />
      <h1>Yata</h1>
    </section>
    <p className={ styles.loading }>Loading...</p>
  </div>
)

export default memo(LoadingScreen)