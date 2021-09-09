"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = require("../../models/review");
async function Find(params) {
    const reviews = await review_1.ReviewModel.find(Object.assign({}, params));
    return reviews;
}
exports.default = Find;
//# sourceMappingURL=find.js.map