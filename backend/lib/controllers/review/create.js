"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const review_1 = require("../../models/review");
const parameter_error_1 = require("../../utils/parameter-error");
async function Create(params) {
    const review = new review_1.ReviewModel(Object.assign({}, params));
    let error = review.validateSync();
    if (error) {
        const missing = Object.keys(error.errors);
        throw new parameter_error_1.default(`Request is missing required fields: ${missing.map(field => field)}`, {
            fieldMissing: true,
            fields: missing
        });
    }
    await review.save();
    return review;
}
exports.default = Create;
//# sourceMappingURL=create.js.map