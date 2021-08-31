
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charset="UTF-8" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
      
    </Head>
    <Component {...pageProps} />
  </>)
}

export default MyApp
