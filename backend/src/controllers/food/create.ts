import { FoodModel, Food } from '../../models/food';
import ParameterError from '../../utils/parameter-error';

async function Create(params: Food): Promise<Food> {
  const food = new FoodModel({
    ...params
  });

  let error = food.validateSync();
  if(error) {
    const missing = Object.keys(error.errors);
    throw new ParameterError(`Request is missing required fields: ${missing.map(field => field)}`, {
      fieldMissing: true,
      fields: missing,
    });
  }
  

  await food.save();

  return food;
}

export default Create;
