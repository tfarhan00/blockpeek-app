import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  
  return (
    <>
      <Head>
        <title>blockpeek</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description " content="Crypto Market Watcher" />
       <link rel="icon"  href="/favicon-32x32.png" />
      </Head>
    <Component {...pageProps} />
    </>
    )
}

export default MyApp
