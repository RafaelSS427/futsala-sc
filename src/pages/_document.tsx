import { Html, Head, Main, NextScript } from 'next/document'
import { ptSerif } from '@/themes'

export default function Document() {
  return (
    <Html lang="en" className={ ptSerif.className }>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}