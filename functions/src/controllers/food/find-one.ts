import { Food, FoodModel } from "../../models/food";

async function FindOne(id: string): Promise<Food> {
  const food = await FoodModel.findById(id);

  return food;
}

export default FindOne;
