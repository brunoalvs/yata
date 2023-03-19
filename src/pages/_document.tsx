import Document, { DocumentContext, DocumentInitialProps, Html, Head, Main, NextScript } from 'next/document'
import { ColorModeScript } from '@chakra-ui/react'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <ColorModeScript initialColorMode="system" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
