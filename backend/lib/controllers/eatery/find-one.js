"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eatery_1 = require("../../models/eatery");
async function FindOne(id) {
    const eatery = await eatery_1.EateryModel.findById(id);
    return eatery;
}
exports.default = FindOne;
//# sourceMappingURL=find-one.js.map