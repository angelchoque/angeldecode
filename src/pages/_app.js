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
        <meta name="copyright" content="angeldecode" />
        <meta name="description" content="Miguel Angel Choque website - portfolio. Frontend developer web" />
        <meta name="keywords" content=" frontend developer, miguel angel choque, angel decode, angeldecode, angel choque, miguel angel choque website, miguel angel choque portfolio, angel decode portfolio" />
        <meta name="author" content="angeldecode" />
        <title>Angel Choque | Portfolio</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>

      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  ) 
}
