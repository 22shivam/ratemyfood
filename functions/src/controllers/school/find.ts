import { SchoolModel, School } from "../../models/school";

async function Find(params: any) : Promise<(School)[]> {
  const schools = await SchoolModel.find({
    ...params
  });

  

  return schools;
}

export default Find;
