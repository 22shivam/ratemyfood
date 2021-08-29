
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} />
    </>)
}

export default MyApp
