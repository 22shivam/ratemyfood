import mongoose from "mongoose";

interface Review {
  comment: string;
  rating: string;
};

const review = new mongoose.Schema<Review>({
    comment: {
        required: true,
        type: String
    },
    rating: {
        required: true,
        type: String
    }
});
