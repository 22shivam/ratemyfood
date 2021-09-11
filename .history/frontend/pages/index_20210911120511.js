import Head from 'next/head'
import Image from 'next/image'
import mainPic from '../public/homepagepic.png'
import { useState } from 'react'
import Link from 'next/link'
import SearchBar from '../components/searchBar'


export default function Home() {
  const [searchValue, setSearchValue] = useState();
  return (
    <div className="container sm mx-auto">
      <Head>
        <title>ratemyfood</title>
        <meta name="description" content="ratemyprofessor, but for food" />

        <link rel="apple-touch-icon" sizes="180x180" href="/favicon_package_v0/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_package_v0/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_package_v0/favicon-16x16.png"></link>
        <link rel="manifest" href="/favicon_package_v0/site.webmanifest"></link>
        <link rel="mask-icon" href="/favicon_package_v0/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#da532c" />
        <link rel="shortcut icon" href="/favicon_package_v0/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        
      </Head>

      <br />
      <br />
      <br />
      <br />

      <br />

      <center><div>
        {/* dimensions are 1200*630 */}
        <Image src={mainPic} className="md:bg-contain" width={600} height={315} />
        <br />
        <br />
        <p style={{ fontFamily: "comfortaa", fontSize: "30px" }}>
          ratemyprofessor, but for food
        </p>
      </div></center>

      <SearchBar/>
      <Link href="/feedback"><small style={{ fontFamily: "comfortaa", fontSize: "12px", color: "white", padding: "0 5px", textAlign:"center" }} id="emailHelp" className="form-text text-muted block mb-2 mt-2 mb-2 cursor-pointer underline">share feedback</small></Link>

      <br />
      <br />
      <br />
      <br />



    </div>
  )
}
