'use client'

export async function handleDarkTheme(): Promise<boolean> {
  if (typeof window === 'undefined') throw new Error('window is undefined')
  if (typeof localStorage === 'undefined') throw new Error('localStorage is undefined')

  if (localStorage.getItem('darkMode') === null) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    localStorage.setItem('darkMode', prefersDarkScheme.matches.toString())
    return prefersDarkScheme.matches
  }

  return JSON.parse(localStorage.getItem('darkMode') as string)
}
