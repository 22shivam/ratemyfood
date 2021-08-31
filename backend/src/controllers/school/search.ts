import { School , SchoolModel } from '../../models/school';

async function Search(query: any): Promise<School[]> {
  if(!query) {
    return [];
  }

  const results = await SchoolModel.aggregate([
    {
      $search: {
        index: 'schools',
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
