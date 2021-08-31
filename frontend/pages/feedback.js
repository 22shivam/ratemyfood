import NavLike from '../components/navLike'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import FormLabel from '../components/formLabel'

export default function FeedbackForm() {
    const addFeedback = async (event) => {
        event.preventDefault()
        console.log(name, email, comment)
        // await fetch(`https://ratemyfood-2dqcpifvva-ue.a.run.app/api/feedback`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         comment: comment,
        //         author: name,
        //         email: email
        //     }),
        // })
        setAlert(true)
    }

    const showAlert = () => {
        if (alert) {
            return (
                
            <div class="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" style={{id: "modal-id" }}>
            <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div class="rounded-3xl w-full max-w-lg p-5 relative mx-8 my-auto rounded-xl shadow-lg bg-white">
                {/* <!--content--> */}
                <div class="">
                    {/* <!--body--> */}
                    <div class="text-center p-5 flex-auto justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 -m-1 flex items-center text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 flex items-center text-green-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        <h2 class="text-xl font-bold py-4 " style={{ fontFamily: "comfortaa", fontSize: "15px"}}>feedback submitted!</h2>
                        <p class="text-sm text-gray-500 px-2" style={{ fontFamily: "comfortaa", fontSize: "15px"}}>thank you so much for sharing your thoughts with us!</p>
                    </div>
                    {/* <!--footer--> */}
                    <div class="p-3  mt-2 text-center space-x-4 md:block">
        
                        <button class="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-green-600" onClick={()=>{setAlert(false)}} style={{ fontFamily: "comfortaa", fontSize: "15px"}} >close</button>
                    </div>
                </div>
            </div>
        </div>
            )
        }
    }



    const router = useRouter();
    const [name, setName] = useState("")
    const [previousName, setPreviousName] = useState("")
    const [email, setEmail] = useState("")
    const [comment, setComment] = useState("")
    // const [id, setId] = useState("")
    const [alert, setAlert] = useState(false)

    function annonymousButtonClick(e) {
        if (e.target.checked) {
            setPreviousName(name)
            setName("annonymous")
        } else {
            setName(previousName)
        }
    }

    // useEffect(async () => {
    //     if (!router.isReady) { return };
    //     const { id } = router.query;
    //     setId(id)
    //     console.log(id)

    // }, [router.isReady])

    return (
        <>
            <NavLike heading="share feedback on ratemyfood" onBack={router.back}></NavLike>
            <br />
            <form className="container" onSubmit={addFeedback}>
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
                <div className="form-group mb-2">
                    <FormLabel heading="email"></FormLabel>
                    <input value={email} type="email" className="form-control shadow-none rounded-3xl mb-2" id="email" aria-describedby="email" onChange={(e) => { setEmail(e.target.value) }} />
                    <small style={{ fontFamily: "comfortaa", fontSize: "12px", color: "white", padding: "0 5px" }} id="emailHelp" class="form-text text-muted block mb-2 mt-0 mb-3">optional</small>
                </div>

                <div className="form-group mb-2 mt-4">
                    <FormLabel heading="comment"></FormLabel>
                    <textarea required className="form-control shadow-none rounded-3xl mb-2" id="comment" rows="3" value={comment} onChange={(e) => { setComment(e.target.value) }}></textarea>
                </div>



                <br />
                <br />
                <center>
                    <button type="submit" className="btn btn-primary mb-2 px-4" style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white", padding: "12px" }}>submit</button>
                </center>
            </form>

            <br />
            <br />
            <br />
            <br />
            {showAlert()}
            

        </>
    )
}

