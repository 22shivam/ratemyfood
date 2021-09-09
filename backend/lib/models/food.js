"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoodModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
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
    eateryId: {
        required: true,
        type: String
    },
    cost: {
        required: true,
        type: String
    }
});
const FoodModel = mongoose_1.model('Food', schema);
exports.FoodModel = FoodModel;
exports.default = FoodModel;
//# sourceMappingURL=food.js.map