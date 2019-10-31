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

    --textcolor: hsla(0, 0%, 33%, 1);
    --textcolor-dark: hsla(0, 0%, 17%, 1);
    --textcolor-light: hsla(0, 0%, 38%, 1);

    --background: hsla(0, 0%, 100%, 1);
    --background-contrast: hsla(0, 0%, 97%, 1);

    --border-color: hsla(0, 0%, 87%, 1);
    --shadow-color: hsla(0, 0%, 0%, 0.13);
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
