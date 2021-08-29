export default function navLike({heading, onBack}) {
    return (<center>
        <br/>
        <span className="cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "20px", display: "inline", fontWeight: "bold" }} onClick={onBack}>
          <svg style={{ display: "inline" }} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
            <path style={{ display: "inline" }} fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
          </svg>
        </span>

        <p className="text-lowercase" style={{ fontFamily: "comfortaa", fontSize: "20px", display: "inline", fontWeight: "800", display: "inline" }}>{heading}</p>
        </center>)
}