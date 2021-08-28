import { EateryModel, Eatery } from '../../models/eatery';

async function Find(params: any): Promise<Eatery[]> {
  const eateries = await EateryModel.find({
    ...params
  });

  return eateries;
}

export default Find;
