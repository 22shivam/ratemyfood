import { Schema, model } from "mongoose";

interface Food {
  name: string;
  images: string[];
  description: string;
  reviews: string[];
  cost: string;
  eateryId: string;
}

const schema = new Schema<Food>({
  name: {
      required: true,
      type: String
  },
  images: [{
    required: false,
    type: String
  }],
  description: {
    required: true,
    type: String
  },
  reviews: [{
    required: false,
    type: String
  }],
  eateryId: [{
    required: true,
    type: String
  }],
  cost: {
    required: true,
    type: String
  }
});

const FoodModel = model<Food>('Food', schema);

export default FoodModel;
export {
  FoodModel,
  Food
}
