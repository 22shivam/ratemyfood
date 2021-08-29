import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SearchBar from '../components/searchBar'
import Image from 'next/image'

export default function Search() {
  const [searchValue, setSearchValue] = useState();

  const router = useRouter();
  const { term } = router.query;

  console.log(term);

  const [data, setData] = useState([])

  useEffect(async () => {

    const res = await fetch(`http://localhost:8080/api/schools/`)
    const fetchedData = await res.json()
    console.log(fetchedData.schools)
    setData(fetchedData.schools)

  }, [])


  return (
    <div className="container mt-6">
      <SearchBar/>
      
      <center>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}} className="grayout">showing results for: </p>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}}>{term}</p>
      </center>
      <br/>
      <br/>
      

      {data ? data.map((school) => {
        console.log(school); return (
          <center>
          <div key={school._id}>
              <Link href={`/schools/${school._id}`}>
              <div className=" shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">
                <center><Image src="/images/indianaUniversityLogo.jpeg" alt={school.name} height="200" width="200"/></center>
                
                <div className="p-4 bg-white">
                  <h1 className="font-bold text-2xl text-center text-lowercase" style={{fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600"}}>{school.name}</h1>
                </div>
              
            </div>
            </Link>
          </div>
          <br></br>
          <br></br>
          </center>
        )
      }) : "we dont have data"}
    </div>
  )
}