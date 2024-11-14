"use server";

export const executeCode = async (code: string) => {
  const evalCode = `(${code})()`;
  return await eval(evalCode);
};

const e = await executeCode("function executable() { return [1, 2, 3]; }");
console.log(e);
