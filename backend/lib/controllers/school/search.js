"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const school_1 = require("../../models/school");
async function Search(query) {
    console.log(query);
    if (!query) {
        return [];
    }
    const results = await school_1.SchoolModel.aggregate([
        {
            $search: {
                index: 'school',
                autocomplete: {
                    query: `${query}`,
                    path: "name",
                    "fuzzy": {
                        "maxEdits": 2,
                        "prefixLength": 0
                    }
                }
            }
        }
    ]);
    console.log(results);
    return results;
}
exports.default = Search;
//# sourceMappingURL=search.js.map