import { EateryModel, Eatery } from '../../models/eatery';

async function GetAll(): Promise<Eatery[]> {
  const eateries = await EateryModel.find();

  return eateries;
}

export default GetAll;
