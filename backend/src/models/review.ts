import { Schema, model, ObjectId } from "mongoose";

interface Review {
  comment: string;
  rating: string;
  foodId: string;
  author: string;
};

const schema = new Schema<Review>({
    comment: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: String
    },
    foodId: {
      required: true,
      type: String
    }
});

const ReviewModel = model<Review>('Review', schema);

export default ReviewModel;
export {
  ReviewModel,
  Review
}
