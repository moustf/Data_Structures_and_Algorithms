function isAlienSorted(words: string[], order: string): boolean {
  const orderMap: Record<string, number> = {};
  for (let m = 0; m < order.length; m++) {
    orderMap[order[m]] = m;
  }

  for (let s = 0; s < words.length - 1; s++) {
    for (let i = 0; i < words[s].length; i++) {
      // If we do not find a mismatch letter between words[i] and words[i + 1],
      // We need to examine the case when words are like ("apple", "app").
      if (i >= words[s + 1].length) return false;

      if (words[s][i] !== words[s + 1][i]) {
        if (orderMap[words[s][i]] > orderMap[words[s + 1][i]]) return false;
        break;
      }
    }
  }

  return true;
}
