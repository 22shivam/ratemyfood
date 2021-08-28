import { ReviewModel, Review } from "../../models/review";

async function Find(params: any) : Promise<(Review)[]> {
  const reviews = await ReviewModel.find({
    params
  });

  return reviews;
}

export default Find;
