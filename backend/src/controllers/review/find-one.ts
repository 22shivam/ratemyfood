import { ReviewModel, Review } from "../../models/review";

async function FindOne(id: string) : Promise<(Review)> {
  const review = await ReviewModel.findById(id);

  return review;
}

export default FindOne;
