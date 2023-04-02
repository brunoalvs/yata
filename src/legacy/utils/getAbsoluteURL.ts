const getAbsoluteURL = (url: string, req = null) => {
  let host: string
  if (req) {
    host = req.headers.host
  } else {
    if (typeof window === 'undefined') {
      throw new Error('The `window` object is not available. Please pass a `req` object as the second argument to `getAbsoluteURL`')
    }
    host = window.location.host
  }
  const isLocalhost = host.indexOf('localhost') === 0
  const protocol = isLocalhost ? 'http' : 'https'
  return `${protocol}://${host}${url}`
}

export default getAbsoluteURL
