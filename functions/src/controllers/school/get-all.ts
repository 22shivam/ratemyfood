import { School , SchoolModel } from '../../models/school';

async function GetAll(): Promise<School[]> {
  const schools = await SchoolModel.find();

  return schools;
}

export default GetAll;
