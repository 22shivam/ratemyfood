"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("../../models/food");
async function FindOne(id) {
    const food = await food_1.FoodModel.findById(id);
    return food;
}
exports.default = FindOne;
//# sourceMappingURL=find-one.js.map