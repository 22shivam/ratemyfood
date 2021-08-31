import { Food, FoodModel } from "../../models/food";

async function Search(query: any): Promise<(Food)[]> {
  if(!query) {
    return [];
  }

  const results = await FoodModel.aggregate([
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

export default Search;
