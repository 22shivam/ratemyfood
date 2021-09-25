import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { querySearch } from '../utils/query';

function Search({ results, term }) {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [schools, setSchools] = useState(results);
  const [searchTerm, setSearchTerm] = useState(term);


  const updateSearch = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSchools(await querySearch(searchValue));
    setSearchTerm(searchValue);
    
    setLoading(false);
  }

  
  return (
    <div className="container mt-6">
      {/* start of search bar */}
      <div className="container">
        <br />
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8">
            <form onSubmit={updateSearch}>          
              <div className="row no-gutters align-items-center rounded-3xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500 opacity-70">
                <div className="col-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-6 opacity-30 input-group-prepend" fill="none" viewBox="0 0 20 20" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>

                <div className="col">
                  <input className="form-control form-control-lg form-control-borderless shadow-none border-0" value={searchValue} onChange={(e) => { setSearchValue(e.target.value) }}  style={{ fontFamily: "comfortaa", fontSize: "1em" }} type="search" placeholder="search school" />
                </div>

                <div className="col-auto">
                  
                  <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "20px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">enter</button>
                  
              
                </div>

              </div>
            </form>
          </div>
        </div>
      {/* end of search bar */}
    </div>
      {loading ? <div/>: <center>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}} className="grayout">showing results for: </p>
        <p style={{fontFamily: "comfortaa", fontSize: "12px", display:"inline"}}>{searchTerm}</p>
      </center>}
      
      <br/>
      <br/>
      

      {loading ? <div className=" flex justify-center items-center"><br/>
  <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
</div> : (schools.length===0) ? <center><div style={{ fontFamily: "comfortaa", fontSize: "20px", fontWeight: "400" }} className="mt-10">no results found</div></center>: schools.map((school) => {return (
          
          <div key={school._id}>
            <center>
              <Link href={`/schools/${school._id}`}>
              <div className=" shadow w-80 rounded-md cursor-pointer overflow-hidden hover:shadow-xl transform hover:scale-105 duration-500 rounded-3xl">
                <center><Image src="/images/indianaUniversityLogo.jpeg" alt={school.name} height="200" width="200"/></center>
                
                <div className="p-4 bg-white">
                  <h1 className="font-bold text-2xl text-center text-lowercase" style={{fontFamily: "comfortaa", fontSize: "25px", fontWeight: "600"}}>{school.name}</h1>
                </div>
              
            </div>
            </Link>
            </center>

          <br></br>
          <br></br>
          </div>
          
        )
      })}
    </div>
  )
}

Search.getInitialProps = async (ctx) => {
  const results = await querySearch(ctx.query.term);

  return {
    results,
    term: ctx.query.term
  };
}

export default Search;