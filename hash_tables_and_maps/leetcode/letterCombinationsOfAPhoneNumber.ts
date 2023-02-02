function letterCombinations(digits: string): string[] {
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  if (digits === "") return [];

  const res: string[] = [];
  const visited = new Set<string>();

  const helperFunc = (str: string, digs: string): void => {
    if (visited.has(str)) return;
    visited.add(str);

    if (!digs) {
      res.push(str);
      return;
    }

    const newDigs = digs.slice(1);

    for (let i = 0; i < map[digs[0]].length; i++) {
      const char = map[digs[0]][i];
      helperFunc(str + char, newDigs);
    }
  };

  helperFunc("", digits);
  return res;
}
