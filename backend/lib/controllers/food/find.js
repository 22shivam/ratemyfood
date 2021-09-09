"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("../../models/food");
async function Find(params) {
    const foods = await food_1.FoodModel.find(Object.assign({}, params));
    return foods;
}
exports.default = Find;
//# sourceMappingURL=find.js.map