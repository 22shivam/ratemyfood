import { Eatery, EateryModel } from "../../models/eatery";
import ParameterError from '../../utils/parameter-error';

async function Create(params: Eatery): Promise<Eatery> {
  const eatery = new EateryModel({
    ...params
  });

  
  const error = eatery.validateSync();
  if(error) {
    const missing = Object.keys(error.errors);
    throw new ParameterError(`Request is missing required fields: ${missing.map(field => field)}`, {
      fieldMissing: true,
      fields: missing,
    });
  }

  await eatery.save();

  return eatery;
}

export default Create;
