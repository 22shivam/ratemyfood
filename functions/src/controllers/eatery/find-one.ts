import { EateryModel, Eatery } from '../../models/eatery';

async function FindOne(id: string): Promise<Eatery> {
  const eatery = await EateryModel.findById(id);

  return eatery;
}

export default FindOne;
