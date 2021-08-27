import { Food, FoodModel } from "../../models/food";

async function GetAll(): Promise<(Food)[]> {
  const foods = await FoodModel.find();

  return foods;
}

export default GetAll;
