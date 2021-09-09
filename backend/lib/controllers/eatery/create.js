"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eatery_1 = require("../../models/eatery");
const parameter_error_1 = require("../../utils/parameter-error");
async function Create(params) {
    const eatery = new eatery_1.EateryModel(Object.assign({}, params));
    const error = eatery.validateSync();
    if (error) {
        const missing = Object.keys(error.errors);
        throw new parameter_error_1.default(`Request is missing required fields: ${missing.map(field => field)}`, {
            fieldMissing: true,
            fields: missing,
        });
    }
    await eatery.save();
    return eatery;
}
exports.default = Create;
//# sourceMappingURL=create.js.map