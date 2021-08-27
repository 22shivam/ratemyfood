import Head from 'next/head'

export default function Home() {
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
        <meta name="msapplication-TileColor" content="#da532c"/>
        <link rel="shortcut icon" href="/favicon_package_v0/favicon.ico" />
        <meta name="theme-color" content="#ffffff"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/> 
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
<link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"></link>
      </Head>

      <br/>
      <br/>
      <br/>
      <br/>
     
      <br/>

      <center><div>
        <p style={{fontFamily: "comfortaa", fontSize: "30px"}}>
          ratemyprofessor, but for food
        </p>
      </div></center>
      <br/>
      <br/>

      
      <center><div className=" w-4/12 flex items-center p-6 space-x-6 h-20 rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 opacity-70" style={{backgroundColor: "#723D46"}}>
      <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg" style={{backgroundColor: "#723D46"}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input className="bg-gray-100 outline-none" type="text" placeholder="search for school" style={{backgroundColor: "#723D46"}}/>
      </div>
      <div className="bg-red-600 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" style={{backgroundColor: "#923D46"}}>
        <span>Search</span>
      </div>
    </div>
    </center>
</div>
  )
}
