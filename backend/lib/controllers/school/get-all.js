"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_1 = require("../../models/school");
async function GetAll() {
    const schools = await school_1.SchoolModel.find();
    return schools;
}
exports.default = GetAll;
//# sourceMappingURL=get-all.js.map