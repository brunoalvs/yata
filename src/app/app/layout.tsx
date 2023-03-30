interface LayoutProps {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <div className='grid grid-cols-layout-app gap-2 dark:text-white'>
      <aside className='border border-red-400 sm:fixed sm:top-0 sm:left-0'>
        <h1>Aside</h1>
      </aside>
      <div>
        { children }
      </div>
    </div>
  )
}
