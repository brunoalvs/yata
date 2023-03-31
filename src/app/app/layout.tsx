'use client'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  const [isMobile, setIsMobile] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 768)

    return () => {
      setIsMobile(false)
    }
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={ styles.container }>
      <aside className={ styles.sidebar }>
        <h1>Aside</h1>
      </aside>
      <div className={ styles.content }>
        { isMobile && <button onClick={ () => setIsDrawerOpen(!isDrawerOpen) }>Toggle</button> }
        { children }
        <button onClick={ () => setIsDrawerOpen(!isDrawerOpen) }>Toggle</button>
      </div>
      <section className={ styles.drawer } data-isOpen={ isDrawerOpen }>
        <h1>Section</h1>
      </section>
    </div>
  )
}
