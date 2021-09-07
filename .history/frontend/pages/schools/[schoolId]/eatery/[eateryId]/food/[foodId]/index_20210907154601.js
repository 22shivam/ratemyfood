import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavLike from '../../../../../../../components/navLike'
export default function Food() {

  const router = useRouter();

  const [data, setData] = useState([])
  const [foodItem, setFoodItem] = useState("")
  const [id, setId] = useState("")
  const [schoolId, setSchoolId] = useState("")
  const [eateryId, setEateryId] = useState("")
  const [loading, setLoading] = useState("true")

  useEffect(async () => {
    if (!router.isReady) { return };
    const { foodId, eateryId, schoolId } = router.query;
    setId(foodId)
    setSchoolId(schoolId)
    setEateryId(eateryId)

    const res = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/food/${id}/reviews`)
    const fetchedData = await res.json()
    setData(fetchedData.reviews)

    const res2 = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/food/${id}/`)
    const fetchedData2 = await res2.json()
    setFoodItem(fetchedData2.food.name)

    setLoading(false)

  }, [router.isReady, id])

  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      </Head>
      <div className="mt-6">
        {loading ? <div /> :
          <div>
            <NavLike heading={`reviews for ${foodItem}`} onBack={() => { router.push(`/schools/${schoolId}/eatery/${eateryId}`) }}></NavLike>
            <br />
            <center>
              <Link href={`/addreview/${id}`}>
                <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">add review</button>
              </Link>
            </center>

            <br />
          </div>}

        {loading ? <div class=" flex justify-center items-center"><br/><br /><br />
      <br /><br />
      <br />
          <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
        </div> : data ? data.map((review) => {
          return (
            <div key={review._id}>
              <center>


                <div className="shadow w-80 rounded-md overflow-hidden rounded-3xl">


                  <div className="p-4 bg-white">


                    <p className="starability-result" data-rating={review.rating} />



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
    </div>
  )
}
