import Head from 'next/head'

import MainLayout from '../layout/MainLayout'
import '../styles/normalize.css'
import '../styles/globals.scss'

export default function App ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="angel choque, frontend developer, miguel angel choque" />
        <meta name="copyright" content="Angel Choque" />
        <title>Angel Choque | Portfolio</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  ) 
}
