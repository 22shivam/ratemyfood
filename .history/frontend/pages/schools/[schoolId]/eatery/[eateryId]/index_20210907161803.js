import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavLike from '../../../../../components/navLike'

export default function Eatery() {

  const [searchValue, setSearchValue] = useState("");
  const [searchedForValue, setSearchedForValue] = useState("")
  const [loading, setLoading] = useState("true")

  const router = useRouter();

  const [data, setData] = useState([])
  const [eatery, setEatery] = useState("")
  const [id, setId] = useState("")
  const [schoolId, setSchoolId] = useState("")

  const queryAPI = async (e) => {
    e.preventDefault()
    setLoading(true)
    if (searchValue === "") {
      const res = await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/eatery/${id}/foods`)
      const fetchedData = await res.json()
      setLoading(false)
      setData(fetchedData.foods)
      setSearchedForValue(searchValue)
      return
    }
    console.log(searchValue)
    const queryRes = await fetch(`https://api.ratemyfood.tech/api/eatery/${id}/foods/search?query=${searchValue}`)
    const queryFetchedData = await queryRes.json()
    setLoading(false)
    setData(queryFetchedData.results)
    setSearchedForValue(searchValue)
  }

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
    setLoading(false)


  }, [router.isReady, id])

  const renderPrice = (cost) => {
    if (cost) {
    return (<span className="text-sm font-semibold text-red-50 bg-red-400 py-1 px-3 rounded-full">${cost}</span>)
    } else {
      return <span/>
    }
  }

  return (
    <div className="mt-6">

      {loading ? <div /> : <div>
        <NavLike heading={eatery} onBack={() => { router.push(`/schools/${schoolId}/`) }}></NavLike>
        <Link href="/feedback"><small style={{ fontFamily: "comfortaa", fontSize: "12px", color: "white", padding: "0 5px", textAlign: "center" }} id="emailHelp" className="form-text text-muted block mb-2 mt-0 mb-2 cursor-pointer underline">share feedback</small></Link>
        <div className="container">
          <br />
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">

              <form onSubmit={queryAPI}>
                <div className="row no-gutters align-items-center rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 opacity-70">
                  <div className="col-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 opacity-30 input-group-prepend" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  <div className="col">
                    <input className="form-control form-control-lg form-control-borderless shadow-none border-0" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }} style={{ fontFamily: "comfortaa", fontSize: "1em" }} type="search" placeholder="search food" />
                  </div>

                  <div className="col-auto">

                    <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "20px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">enter</button>


                  </div>

                </div>
              </form>

            </div>

          </div>
          {/* end of search bar */}
        </div></div>}
      {loading ? <div /> : searchedForValue ? <center>
        <p style={{ fontFamily: "comfortaa", fontSize: "12px", display: "inline" }} className="grayout">showing results for: </p>
        <p style={{ fontFamily: "comfortaa", fontSize: "12px", display: "inline" }}>{searchedForValue}</p>
      </center> : <div />}
      {loading ? <div /> :
        <center>
          <br /><span style={{ fontFamily: "comfortaa", fontSize: "15px", fontWeight: "200" }} className="grayout">select item to view reviews</span>
        </center>}
      <br />
      <br />
      {loading ? <div className=" flex justify-center items-center"><br />
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
      </div> : data ? (data.length === 0) ? <center><span style={{ fontFamily: "comfortaa", fontSize: "14px", fontWeight: "200" }} className="mt-2 grayout">no results found for</span></center>: data.map((food) => {
        return (
          <div key={food._id}>
            <center>

              <Link href={`/schools/${schoolId}/eatery/${id}/food/${food._id}`}>
                <div className="shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">


                  <div className="p-4 bg-white">


                    <h1 className="mb-2 font-bold text-2xl text-center text-lowercase" style={{ fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600" }}>{food.name}</h1>
                    {renderPrice(food.cost)}
                    
                    {/* <div style={{ fontFamily: "comfortaa", fontSize: "15px", fontWeight: "600" }} className="text-sm font-semibold grayout py-1 px-3 rounded-full mt-2 text-lowercase">description: {food.description}</div> */}
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