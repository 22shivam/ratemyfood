import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchedForValue, setSearchedForValue] = useState("")
  const [loading, setLoading] = useState("true")
  const router = useRouter();

  const [data, setData] = useState([])

  const queryAPI = async (e) => {
    e.preventDefault()
    console.log(searchValue)
    setLoading(true)
   
    const queryRes = await fetch(`https://api.ratemyfood.tech/api/schools/search?query=${searchValue}`)
    const queryFetchedData = await queryRes.json()
    setLoading(false)
    setData(queryFetchedData.results)
    setSearchedForValue(searchValue)
    router.push(`search?term=${searchValue}`)
  }

  useEffect(async () => {
    if (!router.isReady) { return };
    const { term } = router.query;
    const res = await fetch(`https://api.ratemyfood.tech/api/schools/search?query=${term}`)
    const fetchedData = await res.json()
    setLoading(false)
    setSearchedForValue(term)
    setData(fetchedData.results)


  }, [router.isReady])

  // useEffect(async () => {

  //   const res = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/schools/`)
  //   const fetchedData = await res.json()
  //   setData(fetchedData.schools)

  // }, [])


  return (
    <div className="container mt-6">
      {/* start of search bar */}
      <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

            <form onSubmit={queryAPI}>          
            <div className="row no-gutters align-items-center rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 opacity-70">
              <div className="col-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 opacity-30 input-group-prepend" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="col">
                <input className="form-control form-control-lg form-control-borderless shadow-none border-0" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}  style={{ fontFamily: "comfortaa", fontSize: "1em" }} type="search" placeholder="search school" />
              </div>

              <div className="col-auto">
                
                <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "20px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">enter</button>
                
             
              </div>

            </div>
            </form>
          
        </div>

      </div>
      {/* end of search bar */}
    </div>
      
      <center>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}} className="grayout">showing results for: </p>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}}>{searchedForValue}</p>
      </center>
      <br/>
      <br/>
      

      {loading ? "loading..." : data ? (data.length===0) ? "no results found": data.map((school) => {return (
          
          <div key={school._id}>
            <center>
              <Link href={`/schools/${school._id}`}>
              <div className=" shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">
                <center><Image src="/images/indianaUniversityLogo.jpeg" alt={school.name} height="200" width="200"/></center>
                
                <div className="p-4 bg-white">
                  <h1 className="font-bold text-2xl text-center text-lowercase" style={{fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600"}}>{school.name}</h1>
                </div>
              
            </div>
            </Link>
            </center>

          <br></br>
          <br></br>
          </div>
          
        )
      }) : "we dont have data"}
    </div>
  )
}