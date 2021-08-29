import {useState} from "react"
import Link from "next/link"

export default function SearchBar() {
    const [searchValue, setSearchValue] = useState("");
    return (

      <div className="container">
      <br />
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

          <form method="POST" action="/api/search">
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
                <Link href={`/search?term=${searchValue}`}>
                <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "20px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">enter</button>
                </Link>
              </div>

            </div>
          </form>
        </div>

      </div>
    </div>
        
    )
}