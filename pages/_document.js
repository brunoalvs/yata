import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet, createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  :root {
    --primary: #2A30C8;
    --primary-accent: #1A089D;
    --secondary: #9F2AC8;
    --secondary-accent: #5a1872;

    --textcolor: #545454;
    --textcolor-dark: #2b2b2b;
    --textcolor-light: #616161;

    --background: #474B5A;
    --background-contrast: #f7f7f7;

    --border-color: #dedede;
    --shadow-color: #00000021;
  }
`

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            sheet.collectStyles(
              <React.Fragment>
                <GlobalStyles />
                <App {...props} />
              </React.Fragment>
            )
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <html lang="pt-br">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
