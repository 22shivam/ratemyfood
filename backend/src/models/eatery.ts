import { Schema, model } from 'mongoose';

interface Eatery {
  name: string;
  description: string;
  isFoodcourt: boolean;
  location: string;
  schoolId: string;
  rating: string;
}

const schema = new Schema<Eatery>({
  name: {
    required: true,
    type: String
  },
  rating: {
    required: true,
    type: String
  },
  description: {
    required: true,
    type: String
  },
  location: {
    required: true,
    type: String
  },
  schoolId: {
    required: true,
    type: String
  },
  isFoodcourt: Boolean
});

const EateryModel = model<Eatery>('Eatery', schema);

export default EateryModel;
export {
  EateryModel,
  Eatery
}
