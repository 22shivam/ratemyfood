import { EateryModel, Eatery } from '../../models/eatery';

async function Search(query: any): Promise<(Eatery)[]> {
    if(!query) {
      return [];
    }

    const results = await EateryModel.aggregate([
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

export default Search;
