import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'

  export default function Food() {
    
    const router = useRouter();

    const [data, setData] = useState([])

    useEffect(async () => {
    if(!router.isReady) {return};
    const { id } = router.query;
    console.log(id)

    const res = await fetch(`http://localhost:8080/api/food/${id}/reviews`)
    const fetchedData = await res.json()
    console.log('eateries', fetchedData)
    setData(fetchedData.reviews)
    
    
    },[router.isReady])

    return (
          <div>
             {data ? data.map((review)=>{return <div key={review._id}>{review.comment}</div>}): "we dont have data"}
          </div>
      )
  }