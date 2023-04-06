import styles from './styles.module.scss'

interface HeadingPageProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
}

export const HeadingPage = ({ children, ...props }: HeadingPageProps) => (
  <h1 className={ styles.heading } { ...props }>
    { children }
  </h1>
)
