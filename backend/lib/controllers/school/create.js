"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_1 = require("../../models/school");
const parameter_error_1 = require("../../utils/parameter-error");
async function Create(params) {
    const school = new school_1.SchoolModel(Object.assign({}, params));
    let error = school.validateSync();
    if (error) {
        const missing = Object.keys(error.errors);
        throw new parameter_error_1.default(`Request is missing required fields: ${missing.map(field => field)}`, {
            fieldMissing: true,
            fields: missing,
        });
    }
    await school.save();
    return school;
}
;
exports.default = Create;
//# sourceMappingURL=create.js.map