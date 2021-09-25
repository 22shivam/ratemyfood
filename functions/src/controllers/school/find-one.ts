import { SchoolModel, School } from "../../models/school";

async function FindOne(id: string) : Promise<(School)> {
  const school = await SchoolModel.findById(id);

  return school;
}

export default FindOne;
