import { evaluateAnswer } from "./evaluateAnswer";
import { executeCode } from "./executeCode";

export const submitCode = async (code: string, answer: any): Promise<boolean> => {
  const result = await executeCode(code);
  return evaluateAnswer(result, answer);
};
