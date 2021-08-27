import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ratemyfood</title>
        <meta name="description" content="ratemyprofessor, but for food" />
        
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicon_package_v0/site.webmanifest"></link>
        <link rel="mask-icon" href="/favicon_package_v0/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <link rel="shortcut icon" href="/favicon_package_v0/favicon.ico" />
        <meta name="theme-color" content="#ffffff"/>
      </Head>

    
    </div>
  )
}
