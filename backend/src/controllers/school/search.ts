import { School , SchoolModel } from '../../models/school';

async function Search(query: any): Promise<(School)[]> {
  console.log(query);
  if(!query) {
    return [];
  }

  const results = await SchoolModel.aggregate([
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

export default Search;
