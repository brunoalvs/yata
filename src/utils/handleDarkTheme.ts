'use client'

export async function handleDarkTheme(): Promise<boolean> {
  if (typeof window === 'undefined') throw new Error('window is undefined')

  // Aguarda até que o localStorage esteja disponível
  await new Promise<void>((resolve) => {
    const intervalId = setInterval(() => {
      if (typeof localStorage !== 'undefined') {
        clearInterval(intervalId)
        resolve()
      }
    }, 100)
  })

  if (localStorage.getItem('darkMode') === null) {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)')
    localStorage.setItem('darkMode', prefersDarkScheme.matches.toString())
    return prefersDarkScheme.matches
  }

  return localStorage.getItem('darkMode') === 'true'
}
