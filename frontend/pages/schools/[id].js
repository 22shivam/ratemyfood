import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

  export default function School() {
    
    const router = useRouter();

    const [data, setData] = useState([])

    useEffect(async () => {
    if(!router.isReady) {return};
    const { id } = router.query;
    console.log(id)

    const res = await fetch(`http://localhost:8080/api/school/${id}/eateries`)
    const fetchedData = await res.json()
    console.log('eateries', fetchedData.eateries)
    setData(fetchedData.eateries)
    
    
    },[router.isReady])

    return (
          <div>
             {data ? data.map((eatery)=>{console.log(eatery); return <div key={eatery._id}><Link href={`/schools/${eatery._id}`}>{eatery.name}</Link></div>}): "we dont have data"}
          </div>
      )
  }