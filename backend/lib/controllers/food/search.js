"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const food_1 = require("../../models/food");
async function Search(query) {
    if (!query) {
        return [];
    }
    const results = await food_1.FoodModel.aggregate([
        {
            $search: {
                index: 'food',
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