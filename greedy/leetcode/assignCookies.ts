function findContentChildren(g: number[], s: number[]): number {
  let count = 0;
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  for (let i = 0; count < g.length && i < s.length; i++) {
    if (s[i] >= g[count]) count++;
  }
  return count;
};