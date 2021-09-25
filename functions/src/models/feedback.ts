import { Schema, model } from "mongoose";

interface Feedback {
  comment: string;
  author: string;
  email: string;
};

const schema = new Schema<Feedback>({
    comment: {
        required: true,
        type: String
    },
    author: {
      required: true,
      type: String
    },
    email: {
      required: false,
      type: String
    }
});

const FeedbackModel = model<Feedback>('Feedback', schema);

export default FeedbackModel;
export {
  FeedbackModel,
  Feedback
}
