import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavLike from '../../../../../components/navLike'

export default function Eatery() {

  const router = useRouter();

  const [data, setData] = useState([])
  const [eatery, setEatery] = useState("")
  const [id, setId] = useState("")
  const [schoolId, setSchoolId] = useState("")

  useEffect(async () => {
    if (!router.isReady) { return };
    const { eateryId, schoolId } = router.query;
    setId(eateryId)
    setSchoolId(schoolId)

    const res = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/eatery/${id}/foods`)
    const fetchedData = await res.json()
    setData(fetchedData.foods)

    const res2 = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/eatery/${id}`)
    const fetchedData2 = await res2.json()

    setEatery(fetchedData2.eatery.name)


  }, [router.isReady, id])

  return (
    <div className="mt-6">
      
      
      <NavLike heading={eatery} onBack={()=>{router.push(`/schools/${schoolId}/`)}}></NavLike>

        <center>
        <br/><span style={{ fontFamily: "comfortaa", fontSize: "15px", fontWeight: "200"}} className="grayout">select item to view reviews</span>
        </center>
      <br/>
      <br/>
      {data ? data.map((food) => {
        return (
          <div key={food._id}>
            <center>

              <Link href={`/schools/${schoolId}/eatery/${id}/food/${food._id}`}>
                <div className="shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">


                  <div className="p-4 bg-white">


                    <h1 className="mb-2 font-bold text-2xl text-center text-lowercase" style={{ fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600" }}>{food.name}</h1>
                    <span className="text-sm font-semibold text-red-50 bg-red-400 py-1 px-3 rounded-full">${food.cost}</span>
                    <div style={{ fontFamily: "comfortaa", fontSize: "15px", fontWeight: "600" }} className="text-sm font-semibold grayout py-1 px-3 rounded-full mt-2 text-lowercase">description: {food.description}</div>
                  </div>

                </div>
              </Link>

              <br></br>
              <br></br>
            </center>

          </div>
        )
      }) : "we dont have data"}
    </div>
  )
}