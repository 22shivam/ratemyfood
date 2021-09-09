"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = require("../../models/review");
async function FindOne(id) {
    const review = await review_1.ReviewModel.findById(id);
    return review;
}
exports.default = FindOne;
//# sourceMappingURL=find-one.js.map