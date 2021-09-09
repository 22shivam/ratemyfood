"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchoolModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    name: {
        required: true,
        type: String
    },
    location: {
        required: true,
        type: String
    }
});
const SchoolModel = mongoose_1.model('School', schema);
exports.SchoolModel = SchoolModel;
exports.default = SchoolModel;
//# sourceMappingURL=school.js.map