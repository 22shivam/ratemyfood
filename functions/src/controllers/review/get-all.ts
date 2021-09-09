import { ReviewModel, Review } from "../../models/review";

async function GetAll() : Promise<(Review)[]> {
  const reviews = await ReviewModel.find();

  return reviews;
}

export default GetAll;
