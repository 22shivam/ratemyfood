import { ReviewModel, Review } from '../../models/review';

type Params = {
  comment: string;
  rating: string;
  foodId: string;
}

async function Create(params: Params): Promise<Review> {
  const review = await new ReviewModel({
    ...params
  });

  await review.save();

  return review;
}

export default Create;
