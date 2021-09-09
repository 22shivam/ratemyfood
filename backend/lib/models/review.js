"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewModel = void 0;
const mongoose_1 = require("mongoose");
;
const schema = new mongoose_1.Schema({
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
    },
    author: {
        required: true,
        type: String
    }
});
const ReviewModel = mongoose_1.model('Review', schema);
exports.ReviewModel = ReviewModel;
exports.default = ReviewModel;
//# sourceMappingURL=review.js.map