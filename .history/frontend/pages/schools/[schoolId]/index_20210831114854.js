import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLike from '../../../components/navLike'

export default function School() {

  const router = useRouter();
  const [id, setId] = useState("")
  const [data, setData] = useState([])
  const [schoolName, setSchoolName] = useState("")

  useEffect(async () => {
    if (!router.isReady) { return };
    const { schoolId } = router.query;
    
    setId(schoolId)

    const res = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/school/${id}/eateries`)
    const fetchedData = await res.json()
    const res2 = await fetch('https://ratemyfood-2dqcpifvva-ue.a.run.app/api/schools/')
    const fetchedData2 = await res2.json()
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
    setData(fetchedData.eateries)


  }, [router.isReady, id])

  return (
    <div className="mt-6">
      <NavLike heading={schoolName} onBack={()=>{router.push("/")}}></NavLike>
      <Link href="/feedback"><small style={{ fontFamily: "comfortaa", fontSize: "12px", color: "white", padding: "0 5px", textAlign:"center" }} id="emailHelp" className="form-text text-muted block mb-2 mt-0 mb-2 cursor-pointer underline">share feedback</small></Link>
      
      <br />
      <br />

      {data ? (data.length===0) ? "no results found": data.map((eatery) => {
        return (
          <div key={eatery._id}>
            <center>
              <div >
                <Link href={`/schools/${id}/eatery/${eatery._id}`}>
                  <div className="shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">
                    {/* <center><Image src="/images/indianaUniversityLogo.jpeg" alt={eatery.name} height="200" width="200" /></center> */}

                    <div className="p-4 bg-white">        
                    

                      <h1 className="mb-2 font-bold text-2xl text-center text-lowercase" style={{ fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600" }}>{eatery.name}</h1>
                      <span style={{ fontFamily: "comfortaa", fontSize: "15px", fontWeight: "600" }} className="text-sm font-semibold grayout py-1 px-3 text-lowercase rounded-full">location: {eatery.location}</span>
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