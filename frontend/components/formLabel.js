export default function Label({heading}) {
    return (
    <label className="mb-2 px-3" for={heading} style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white", padding: "10px" }}>{heading}</label>
    )
}