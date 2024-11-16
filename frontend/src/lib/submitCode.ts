import { evaluateAnswer } from "./evaluateAnswer";
import { executeCode } from "./executeCode";

export const submitCode = async (
  code: string,
  answer: any
): Promise<{
  code: string;
  answer: any;
  codeResult: any;
  codeEvaluation: boolean;
}> => {
  const codeResult = await executeCode(code);
  const codeEvaluation = evaluateAnswer(codeResult, answer);
  return {
    code,
    answer,
    codeResult,
    codeEvaluation,
  };
};
