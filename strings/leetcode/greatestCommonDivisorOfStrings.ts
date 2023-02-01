const gcd = (len1: number, len2: number): number => {
  let divisor: number;

  for (let m = 1; m <= len1 && m <= len2; m++) {
    if (len1 % m === 0 && len2 % m === 0) {
      divisor = m;
    }
  }

  return divisor;
};

const gcdOfStrings = (str1: string, str2: string): string => {
  if (str1 + str2 !== str2 + str1) return "";

  const maxLen = gcd(str1.length, str2.length);
  return str1.substring(0, maxLen);
};
