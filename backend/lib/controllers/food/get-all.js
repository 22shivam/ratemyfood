"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("../../models/food");
async function GetAll() {
    const foods = await food_1.FoodModel.find();
    return foods;
}
exports.default = GetAll;
//# sourceMappingURL=get-all.js.map