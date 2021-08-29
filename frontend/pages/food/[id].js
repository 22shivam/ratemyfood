import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavLike from '../../components/navLike'
export default function Food() {

  const router = useRouter();

  const [data, setData] = useState([])
  const [foodItem, setFoodItem] = useState("")
  const [id, setId] = useState("")

  useEffect(async () => {
    if (!router.isReady) { return };
    const { id } = router.query;
    setId(id)
    console.log(id)

    const res = await fetch(`http://localhost:8080/api/food/${id}/reviews`)
    const fetchedData = await res.json()
    console.log('eateries', fetchedData)
    setData(fetchedData.reviews)

    const res2 = await fetch(`http://localhost:8080/api/food/${id}/`)
    const fetchedData2 = await res2.json()
    setFoodItem(fetchedData2.food.name)

  }, [router.isReady])

  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      </Head>
      <div>
        <NavLike heading={`reviews for ${foodItem}`} onBack={router.back}></NavLike>

        <br />
        <center>
          <Link href={`/addreview/${id}`}>
            <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">add review</button>
          </Link>
        </center>

        <br />

        {data ? data.map((review) => {
          return (
            <div key={review._id}>
              <center>


                <div className="shadow w-80 rounded-md overflow-hidden rounded-3xl">


                  <div className="p-4 bg-white">


                    <p className="starability-result" data-rating={review.rating}/>
                      
                    
                    
                    <div style={{ fontFamily: "comfortaa", fontSize: "18px", fontWeight: "600" }} className="text-sm font-semibold  py-1 px-3 rounded-full mt-2 text-lowercase">{review.comment}</div>
                    <h1 className="mb-2 font-bold text-2xl text-center text-lowercase grayout" style={{ fontFamily: "comfortaa", fontSize: "12px", fontWeight: "600" }}>{review.author}</h1>

                  </div>

                </div>


                <br></br>
                <br></br>
              </center>

            </div>
          )
        }) : "we dont have data"}
      </div>
    </>
  )
}

function generateRatingJSX(rating) {
  console.log(rating, typeof rating)
  let jsxarray = []
  for (let i = 0; i < rating; i++) {
    jsxarray.push(<li>
      <i className="fas fa-heart fa-sm text-red-500 mr-1"></i>
    </li>)
  }

  for (let i = 0; i < (5 - rating); i++) {
    jsxarray.push(<li>
      <i className="far fa-heart fa-sm text-red-500 mr-1"></i>
    </li>)
  }

  return jsxarray
}
