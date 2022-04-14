import '../styles/globals.css'
import MainLayout from '../layout/MainLayout'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Signika+Negative:wght@300;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="./style/normalize.css" />
        <link rel="stylesheet" href="./style/style.css" />
      </Head>
      <MainLayout>
        <Component {...pageProps} />)
      </MainLayout>
    </>
  ) 
}

export default MyApp
