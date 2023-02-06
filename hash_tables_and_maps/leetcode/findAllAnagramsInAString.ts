const buildAnagram = (str: string): number[] => {
  let anagrams = new Array(26).fill(0);

  for (let i = 0; i < str.length; i++) {
    anagrams[str.charAt(i).charCodeAt(0) - 97] += 1;
  }

  return anagrams;
};

const findAnagrams = (s: string, p: string): number[] => {
  if (p.length > s.length) return [];

  const pHash = buildAnagram(p);
  const sHash = new Array(26).fill(0);
  let start = 0;
  const result: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    sHash[char.charCodeAt(0) - 97] += 1;

    if (i - start === p.length - 1) {
      if (sHash.join("") === pHash.join("")) {
        result.push(start);
      }

      sHash[s.charAt(start).charCodeAt(0) - 97] -= 1;
      start += 1;
    }
  }

  return result;
};
