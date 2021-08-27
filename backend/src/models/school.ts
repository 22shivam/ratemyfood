import { Schema, model } from "mongoose";

interface School {
    name: string;
    location: string;
}

const schema = new Schema<School>({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    }
});

const SchoolModel = model<School>('School', schema);

export default SchoolModel;
export {
  SchoolModel,
  School
}
