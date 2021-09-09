"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eatery_1 = require("../../models/eatery");
async function Find(params) {
    const eateries = await eatery_1.EateryModel.find(Object.assign({}, params));
    return eateries;
}
exports.default = Find;
//# sourceMappingURL=find.js.map