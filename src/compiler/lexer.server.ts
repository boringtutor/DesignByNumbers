type lexerReturnType = { type: "word" | "number"; value: string }[]; // Update the return type to allow for an array with zero or more elements

export function lexer(code: string): any {
  if (code === "") {
    return [];
  }
  const res = code.split(/\s+/).map((token) => {
    return isNaN(token as any)
      ? { type: "word", value: token }
      : { type: "number", value: token };
  });

  return res;
}
