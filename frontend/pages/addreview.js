import NavLike from '../components/navLike'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FormLabel from '../components/formLabel'
import Head from 'next/head'

export default function ReviewForm() {
    const addReview = event => {
        event.preventDefault()
        console.log(event.target.form)
    }

    const router = useRouter();
    const [name, setName] = useState("")
    const [previousName, setPreviousName] = useState("")

    function annonymousButtonClick(e) {
        if (name !== "annonymous") {
            setPreviousName(name)
            setName("annonymous")
        } else {
            setName(previousName)
        }
    }

    return (
        <>
            <NavLike heading="add review" onBack={router.back}></NavLike>
            <br />
            <form className="container">
                <div class="form-group mb-2">
                    <FormLabel heading="name"></FormLabel>
                    <input value={name} type="text" class="form-control shadow-none rounded-3xl mb-2" id="name" aria-describedby="emailHelp" placeholder="" onChange={(e) => { setName(e.target.value) }} />
                    <div class="form-check">
                        <input class="form-check-input shadow-none" onClick={annonymousButtonClick} type="checkbox" value="" id="flexCheckDefault" />
                        <label class="form-check-label" style={{ fontFamily: "comfortaa", fontSize: "15px", padding: "0px", borderRadius: "20px", color: "black" }} for="flexCheckDefault">
                            select to remain annonymous
                        </label>
                    </div>
                </div>

                <div class="form-group mb-2 mt-4">
                    <FormLabel heading="review"></FormLabel>
                    <textarea class="form-control shadow-none rounded-3xl mb-2" id="review" rows="3"></textarea>
                </div>

                <div className="form-group mb-2 mt-4 flex" style={{alignItems:"center"}}>
                {/* <FormLabel heading="inline rating"></FormLabel> */}
                    <label className="mb-2 px-3 mr-3" for="inline rating" style={{fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white", padding: "10px" }}>inline rating</label>
    
                    <fieldset class="starability-basic" style={{alignItems:"center", position: 'relative', top: "9px"}}>
                        <input type="radio" id="no-rate" class="input-no-rate" name="rating" value="0" checked aria-label="No rating." />
                        <input type="radio" id="first-rate1" name="rating" value="1" />
                        <label for="first-rate1" title="Terrible">1 star</label>
                        <input type="radio" id="first-rate2" name="rating" value="2" />
                        <label for="first-rate2" title="Not good">2 stars</label>
                        <input type="radio" id="first-rate3" name="rating" value="3" />
                        <label for="first-rate3" title="Average">3 stars</label>
                        <input type="radio" id="first-rate4" name="rating" value="4" />
                        <label for="first-rate4" title="Very good">4 stars</label>
                        <input type="radio" id="first-rate5" name="rating" value="5" />
                        <label for="first-rate5" title="Amazing">5 stars</label>
                    </fieldset>


                </div>

                <br/>
                <br/>
                <center>
                <button type="submit" class="btn btn-primary mb-2 px-4" style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white", padding: "12px" }} onClick={addReview}>submit</button>
                </center>
            </form>

            <br />
            <br />
            <br />
            <br />
            
        </>
    )
}

