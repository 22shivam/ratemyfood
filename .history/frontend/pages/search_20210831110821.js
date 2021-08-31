import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import SearchBar from '../components/searchBar'
import Image from 'next/image'

export default function Search() {
  const [searchValue, setSearchValue] = useState();
  const [term, setTerm] = useState("");

  const router = useRouter();
  const { queryTerm } = router.query;
  setTerm(queryTerm)

  const [data, setData] = useState([])

  useEffect(async () => {

    const res = await fetch(`https://api.ratemyfood.tech/api/schools/search?query=${term}`)
    const fetchedData = await res.json()
    setData(fetchedData.schools)

  }, [term])


  return (
    <div className="container mt-6">
      <SearchBar/>
      
      <center>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}} className="grayout">showing results for: </p>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}}>{term}</p>
      </center>
      <br/>
      <br/>
      

      {data ? data.map((school) => {return (
          
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