'use client'

export function handleDarkTheme() {
  if (typeof window === 'undefined') throw new Error('window is undefined')
  if (typeof localStorage === 'undefined') throw new Error('localStorage is undefined')

  if (localStorage.getItem('darkMode') !== null) {
    return localStorage.getItem('darkMode') === 'true' ? true : false
  }

  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')

  localStorage.setItem('darkMode', prefersDarkScheme.matches.toString())
  return prefersDarkScheme.matches
}

export async function updateTheme(darkMode: boolean) {
  const toggle = !darkMode
  localStorage.setItem('darkMode', toggle.toString())
  return toggle
}
