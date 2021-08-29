import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function School() {

  const router = useRouter();

  const [data, setData] = useState([])
  const [schoolName, setSchoolName] = useState("")

  useEffect(async () => {
    if (!router.isReady) { return };
    const { id } = router.query;
    console.log(id)

    const res = await fetch(`http://localhost:8080/api/school/${id}/eateries`)
    const fetchedData = await res.json()
    const res2 = await fetch('http://localhost:8080/api/schools/')
    const fetchedData2 = await res2.json()

    console.log(fetchedData2.schools)
    fetchedData2.schools.forEach((school) => {
      if (school._id === id) {
        setSchoolName(school.name)
      }
    })
    // for (school in fetchedData2.schools) {
    //   if (school._id === id) {
    //     setSchoolName(school.name)
    //     break
    //   }
    // }

    console.log('eateries', fetchedData.eateries)
    setData(fetchedData.eateries)


  }, [router.isReady])

  return (
    <div className="mt-6">
      <br />
      <div>
        <center>
        <span className="cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "20px", display: "inline", fontWeight: "bold" }} onClick={() => router.back()}>
          <svg style={{ display: "inline" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path style={{ display: "inline" }} fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </span>

        <p style={{ fontFamily: "comfortaa", fontSize: "20px", display: "inline", fontWeight: "bold", display: "inline"}}>{schoolName}</p>
        </center>
      </div>
      <br />
      <br />

      {data ? data.map((eatery) => {
        return (
          <div>
            <center>
              <div key={eatery._id}>
                <Link href={`/eatery/${eatery._id}`}>
                  <div className="shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">
                    <center><Image src="/images/indianaUniversityLogo.jpeg" alt={eatery.name} height="200" width="200" /></center>

                    <div className="p-4 bg-white">        
                    

                      <h1 className="mb-2 font-bold text-2xl text-center text-lowercase" style={{ fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600" }}>{eatery.name}</h1>
                      <span style={{ fontFamily: "comfortaa", fontSize: "15px", fontWeight: "600" }} class="text-sm font-semibold grayout py-1 px-3 rounded-full">location: {eatery.location}</span>
                    </div>

                  </div>
                </Link>
              </div>
              <br></br>
              <br></br>
            </center>

          </div>)
      }) : "we dont have data"}

    </div>)
}