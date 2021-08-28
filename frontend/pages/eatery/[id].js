import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

  export default function Eatery() {
    
    const router = useRouter();

    const [data, setData] = useState([])

    useEffect(async () => {
    if(!router.isReady) {return};
    const { id } = router.query;
    console.log(id)

    const res = await fetch(`http://localhost:8080/api/eatery/${id}/foods`)
    const fetchedData = await res.json()
    console.log('eateries', fetchedData)
    setData(fetchedData.foods)
    
    
    },[router.isReady])

    return (
          <div>
             {data ? data.map((food)=>{return <div key={food._id}><Link href={`/food/${food._id}/`}>{food.name}</Link></div>}): "we dont have data"}
          </div>
      )
  }