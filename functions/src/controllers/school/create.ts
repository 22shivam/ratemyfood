import { School, SchoolModel } from "../../models/school";
import ParameterError from '../../utils/parameter-error';

async function Create(params: School): Promise<School> {
  const school = new SchoolModel({
    ...params
  });

  let error = school.validateSync();
  if(error) {
    const missing = Object.keys(error.errors);
    throw new ParameterError(`Request is missing required fields: ${missing.map(field => field)}`, {
      fieldMissing: true,
      fields: missing,
    });
  }

  await school.save();

  return school;
};

export default Create;
