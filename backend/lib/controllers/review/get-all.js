"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = require("../../models/review");
async function GetAll() {
    const reviews = await review_1.ReviewModel.find();
    return reviews;
}
exports.default = GetAll;
//# sourceMappingURL=get-all.js.map