const isCommonPrefix = (strs: string[], len: number): boolean => {
  let substr = strs[0].substring(0, len);

  for (let m = 0; m < strs.length; m++) {
      if (!strs[m].startsWith(substr)) {
          return false;
      }
  }

  return true;
}

function longestCommonPrefixOne(strs: string[]): string {
  strs = strs.sort((a, b) => a.length - b.length);
  const substr = strs[0];

  if (strs.length === 0) return '';

  let [l, r] = [1, substr.length];
  
  while (l <= r) {
      const mid = Math.floor(l + ((r - l) / 2));
      
      if (isCommonPrefix(strs, mid)) {
          l = mid + 1;
      } else {
          r = mid - 1;
      }
  }

  return substr.substring(0, (l + ((r - l) / 2)));
};

function longestCommonPrefixTwo(strs: string[]): string {
  strs = strs.sort((a, b) => a.length - b.length);

  if (strs.length === 0) return '';

  let prefix = strs[0];
  let res = '';

  for (let i = 0; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
          prefix = prefix.substring(0, prefix.length - 1);
      }
  }

  return prefix;
};

function longestCommonPrefixThree(strs: string[]): string {
  if (strs.length === 0) return '';

  let substr = strs[0];

  for (let m = 0; m < substr.length; m++) {
      const char = substr.charAt(m);
      for (let s = 0; s < strs.length; s++) {
          if (strs[s].length === m || strs[s].charAt(m) !== char) {
              return substr.substring(0, m);
          }
      }
  }

  return substr;
};
