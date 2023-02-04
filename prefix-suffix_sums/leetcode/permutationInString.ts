const sort = (str: string): string => str.split("").sort().join("");

const checkInclusion = (s1: string, s2: string): boolean => {
  s1 = sort(s1);
  for (let i = 0; i <= s2.length - s1.length; i++) {
    if (s1 === sort(s2.substring(i, i + s1.length))) {
      return true;
    }
  }

  return false;
};
