"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eatery_1 = require("../../models/eatery");
async function GetAll() {
    const eateries = await eatery_1.EateryModel.find();
    return eateries;
}
exports.default = GetAll;
//# sourceMappingURL=get-all.js.map