import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

  export default function Search() {

    const router = useRouter();
    const { term } = router.query;

    console.log(term);

    const [data, setData] = useState([])

    useEffect(async () => {
    
    const res = await fetch(`http://localhost:8080/api/schools/`)
    const fetchedData = await res.json()
    console.log(fetchedData.schools)
    setData(fetchedData.schools)
    
    },[])


    return (
          <div>
             {data ? data.map((school)=>{console.log(school); return <div key={school._id}><Link href={`/schools/${school._id}`}>{school.name}</Link></div>}): "we dont have data"}
          </div>
      )
  }