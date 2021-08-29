import NavLike from '../../components/navLike'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FormLabel from '../../components/formLabel'
import Head from 'next/head'

export default function ReviewForm() {
    const addReview = async (event) => {
        event.preventDefault()
        console.log(name, review, rating)
        await fetch('http://localhost:8080/api/review', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                rating: rating,
                comment: review,
                foodId: id,
                author: name
            }),
          })
        router.back()

    }

    

    const router = useRouter();
    const [name, setName] = useState("")
    const [previousName, setPreviousName] = useState("")
    const [review, setReview] = useState("")
    const [rating, setRating] = useState("0")
    const [id, setId] = useState("")

    function annonymousButtonClick(e) {
        if (name !== "annonymous") {
            setPreviousName(name)
            setName("annonymous")
        } else {
            setName(previousName)
        }
    }

    useEffect(async () => {
        if (!router.isReady) { return };
        const { id } = router.query;
        setId(id)
        console.log(id)
    
      }, [router.isReady])

    return (
        <>
            <NavLike heading="add review" onBack={router.back}></NavLike>
            <br />
            <form className="container" onSubmit={addReview}>
                <div className="form-group mb-2">
                    <FormLabel heading="name"></FormLabel>
                    <input value={name} required type="text" className="form-control shadow-none rounded-3xl mb-2" id="name" aria-describedby="name" onChange={(e) => { setName(e.target.value) }} />
                    <div className="form-check">
                        <input className="form-check-input shadow-none" onClick={annonymousButtonClick} type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" style={{ fontFamily: "comfortaa", fontSize: "15px", padding: "0px", borderRadius: "20px", color: "black" }} htmlFor="flexCheckDefault">
                            select to remain annonymous
                        </label>
                    </div>
                </div>

                <div className="form-group mb-2 mt-4">
                    <FormLabel heading="review"></FormLabel>
                    <textarea required className="form-control shadow-none rounded-3xl mb-2" id="review" rows="3" value={review} onChange={(e)=>{setReview(e.target.value)}}></textarea>
                </div>

                <div className="form-group mb-2 mt-4 flex" style={{alignItems:"center"}}>
                    <label className="mb-2 px-3 mr-3" htmlFor="inline rating" style={{fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white", padding: "10px" }}>inline rating</label>
    
                    <fieldset className="starability-basic" style={{alignItems:"center", position: 'relative', top: "9px"}}>
                        <input type="radio" id="no-rate" className="input-no-rate" name="rating" value="0" checked aria-label="No rating." onClick={()=>{setRating("0")}}/>
                        <input type="radio" id="first-rate1" name="rating" value="1" onClick={()=>{setRating("1")}}/>
                        <label htmlFor="first-rate1" title="Terrible">1 star</label>
                        <input type="radio" id="first-rate2" name="rating" value="2" onClick={()=>{setRating("2")}}/>
                        <label htmlFor="first-rate2" title="Not good">2 stars</label>
                        <input type="radio" id="first-rate3" name="rating" value="3" onClick={()=>{setRating("3")}}/>
                        <label htmlFor="first-rate3" title="Average">3 stars</label>
                        <input type="radio" id="first-rate4" name="rating" value="4" onClick={()=>{setRating("4")}}/>
                        <label htmlFor="first-rate4" title="Very good">4 stars</label>
                        <input type="radio" id="first-rate5" name="rating" value="5" onClick={()=>{setRating("5")}}/>
                        <label htmlFor="first-rate5" title="Amazing">5 stars</label>
                    </fieldset>


                </div>

                <br/>
                <br/>
                <center>
                <button type="submit" className="btn btn-primary mb-2 px-4" style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white", padding: "12px" }}>submit</button>
                </center>
            </form>

            <br />
            <br />
            <br />
            <br />
            
        </>
    )
}

