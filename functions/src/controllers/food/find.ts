import { Food, FoodModel } from "../../models/food";

async function Find(params: any): Promise<(Food)[]> {
  const foods = await FoodModel.find({
    ...params
  });

  return foods;
}

export default Find;
