"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("../../models/food");
const parameter_error_1 = require("../../utils/parameter-error");
async function Create(params) {
    const food = new food_1.FoodModel(Object.assign({}, params));
    let error = food.validateSync();
    if (error) {
        const missing = Object.keys(error.errors);
        throw new parameter_error_1.default(`Request is missing required fields: ${missing.map(field => field)}`, {
            fieldMissing: true,
            fields: missing,
        });
    }
    await food.save();
    return food;
}
exports.default = Create;
//# sourceMappingURL=create.js.map