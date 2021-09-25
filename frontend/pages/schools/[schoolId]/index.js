import { useState } from 'react'
import Link from 'next/link'
import NavLike from '../../../components/navLike'
import { allEateries, eaterySearch } from '../../../utils/query';
import { useRouter } from 'next/router'

function School({ school, initEateries, res }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchTerm, setSearchTerm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [eateries, setEateries] = useState(initEateries);
  const router = useRouter()

  const updateEateries = async (e) => {
    e.preventDefault();

    setLoading(true);
    setEateries(await eaterySearch(school._id, searchValue));
    setSearchTerm(searchValue);

    setLoading(false);
  }

  return (
    <div className="mt-6">
      {loading ? <div/> : <div>
      <NavLike heading={school.name} onBack={()=>{router.push("/")}}></NavLike>
      <Link href="/feedback"><small style={{ fontFamily: "comfortaa", fontSize: "12px", color: "white", padding: "0 5px", textAlign:"center" }} id="emailHelp" className="form-text text-muted block mb-2 mt-0 mb-2 cursor-pointer underline">share feedback</small></Link>


      <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

            <form onSubmit={updateEateries}>
            <div className="row no-gutters align-items-center rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 opacity-70">
              <div className="col-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 opacity-30 input-group-prepend" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              <div className="col">
                <input className="form-control form-control-lg form-control-borderless shadow-none border-0" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}  style={{ fontFamily: "comfortaa", fontSize: "1em" }} type="search" placeholder="search eateries" />
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
    {loading ? <div/>: searchTerm ? <center>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}} className="grayout">showing results for: </p>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}}>{searchTerm}</p>
      </center> : <div/>}
      <br />
      <br />

      {loading ? <div className=" flex justify-center items-center"><br/>
  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
</div> : (eateries.length===0) ? <center><div style={{ fontFamily: "comfortaa", fontSize: "20px", fontWeight: "400" }} className="mt-10">no results found</div></center>: eateries.map((eatery) => {
        return (
          <div key={eatery._id}>
            <center>
              <div >
                <Link href={`/schools/${school._id}/eatery/${eatery._id}`}>
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
      })}

    </div>)
}

School.getInitialProps = async (ctx) => {
  const { school, eateries} = await allEateries(ctx.query.schoolId);

  return {
    school,
    initEateries: eateries,
  }
};

export default School;