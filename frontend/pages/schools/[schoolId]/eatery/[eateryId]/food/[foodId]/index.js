import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import NavLike from '../../../../../../../components/navLike'
import { queryReviews } from '../../../../../../../utils/query';
 function Food({ food, reviews, eatery }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false)


  return (
    <div>
      <Head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css" />
      </Head>
      <div className="mt-6">
        {loading ? <div /> :
          <div>
            <NavLike heading={`reviews for ${food.name}`} onBack={() => { router.push(`/schools/${eatery.schoolId}/eatery/${eatery._id}`) }}></NavLike>
            <br />
            <center>
              <Link href={`/addreview/${food._id}`}>
                <button className="btn rounded-4xl font-semibold rounded-lg cursor-pointer" style={{ fontFamily: "comfortaa", fontSize: "15px", backgroundColor: "black", borderRadius: "20px", color: "white" }} type="submit">add review</button>
              </Link>
            </center>

            <br />
          </div>}

        {loading ? <div className=" flex justify-center items-center"><br/><br /><br />
      <br /><br />
      <br /><br />
      <br /><br />
      <br />
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-black-500"></div>
        </div> : reviews.length ? reviews.map((review) => {
          return (
            <div key={review._id}>
              <center>


                <div className="shadow w-80 rounded-md overflow-hidden rounded-3xl">


                  <div className="p-4 bg-white">


                    <p className="starability-result" data-rating={review.rating} />



                    <div style={{ fontFamily: "comfortaa", fontSize: "18px", fontWeight: "600" }} className="text-sm font-semibold  py-1 px-3 rounded-full mt-2 text-lowercase">{review.comment}</div>
                    <h1 className="mb-2 font-bold text-2xl text-center text-lowercase grayout" style={{ fontFamily: "comfortaa", fontSize: "12px", fontWeight: "600" }}>{review.author}</h1>

                  </div>

                </div>


                <br></br>
                <br></br>
              </center>

            </div>
          )
        }) : <center><div style={{ fontFamily: "comfortaa", fontSize: "20px", fontWeight: "400" }} className="mt-10">no reviews found. be the first to add a review!</div></center>}
      </div>
    </div>
  )
}

Food.getInitialProps = async (ctx) => {
  const { food, reviews, eatery} = await queryReviews(ctx.query.foodId);

  return {
    food,
    eatery,
    reviews
  };
}

export default Food;