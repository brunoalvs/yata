'use client'

import { HeadingPage } from '@/components/common/HeadingPage'
import { useLayout } from '@/contexts/layout'

export default function SettingsPage() {
  const { toggleDarkMode } = useLayout()

  return (
    <div>
      <HeadingPage>
        Settings
      </HeadingPage>
      <p>Manage your settings here.</p>

      <button onClick={ toggleDarkMode }>Toggle Dark Mode</button>
    </div>
  )
}
