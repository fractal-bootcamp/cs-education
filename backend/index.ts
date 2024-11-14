const executeCode = async (code: string) => {
  return await eval(code);
};

const e = await executeCode("let a = 1337; a");

console.log(e);
