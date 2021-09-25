import { Feedback, FeedbackModel } from "../../models/feedback";
import ParameterError from '../../utils/parameter-error';

async function Create(params: Feedback): Promise<Feedback> {
  const feedback = new FeedbackModel({
    ...params
  });

  
  const error = feedback.validateSync();
  if(error) {
    const missing = Object.keys(error.errors);
    throw new ParameterError(`Request is missing required fields: ${missing.map(field => field)}`, {
      fieldMissing: true,
      fields: missing,
    });
  }

  await feedback.save();

  return feedback;
}

export default Create;
