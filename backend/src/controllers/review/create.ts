import { ReviewModel, Review } from '../../models/review';
import ParameterError from '../../utils/parameter-error';

async function Create(params: Review): Promise<Review> {
  const review = new ReviewModel({
    ...params
  });

  let error = review.validateSync();
  if(error) {
    const missing = Object.keys(error.errors);
    throw new ParameterError(`Request is missing required fields: ${missing.map(field => field)}`, {
      fieldMissing: true,
      fields: missing
    });
  }

  await review.save();

  return review;
}

export default Create;
