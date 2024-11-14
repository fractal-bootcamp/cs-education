"use server";

export const executeCode = async (code: string) => {
  return await eval(code);
};

const e = await executeCode("(function executable() { return [1, 2, 3]; })();");
console.log(e);
