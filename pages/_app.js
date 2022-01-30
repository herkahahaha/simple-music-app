import '../styles/globals.css'
import Head from 'next/head'
import Headers from './components/Headers'
import Footer from './components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Simple Music App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Headers />
      <div className="md:container mx-24 my-40">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
