function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>();
  let l = 0;
  let longest = 0;
  for (let i = 0; i < s.length; i++) {
      while (set.has(s.charAt(i))) {
          set.delete(s.charAt(l));
          l += 1;
      }

      set.add(s.charAt(i));
      longest = Math.max(longest, set.size);
  }

  return longest;
};
