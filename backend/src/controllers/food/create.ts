import { FoodModel, Food } from '../../models/food';

async function Create(params: Food): Promise<Food> {
  const food = await new FoodModel({
    ...params
  });

  await food.save();

  return food;
}

export default Create;
