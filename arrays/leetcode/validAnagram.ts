function isAnagramOne(s: string, t: string): boolean {
  return s.split('').sort().join('') === t.split('').sort().join('');
};

function isAnagramTwo(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
      if (t.includes(s.charAt(i))) {
          t = t.replace(s.charAt(i), '');
      }
  }

  if (t.length === 0) return true;
  return false;
};
