"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eatery_1 = require("../../models/eatery");
async function Search(query) {
    if (!query) {
        return [];
    }
    const results = await eatery_1.EateryModel.aggregate([
        {
            $search: {
                index: 'eateries',
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
    return results;
}
exports.default = Search;
//# sourceMappingURL=search.js.map