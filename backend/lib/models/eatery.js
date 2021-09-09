"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EateryModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
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
const EateryModel = mongoose_1.model('Eatery', schema);
exports.EateryModel = EateryModel;
exports.default = EateryModel;
//# sourceMappingURL=eatery.js.map