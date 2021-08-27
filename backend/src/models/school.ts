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