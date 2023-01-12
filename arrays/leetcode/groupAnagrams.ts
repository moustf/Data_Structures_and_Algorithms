function groupAnagramsOne(strs: string[]): string[][] {
  const store: { [key: string]: string[] } = {};

  for (let i = 0; i < strs.length; i++) {
      const ss = strs[i].split('').sort().join();
      if (!store[ss]) {
          store[ss] = [strs[i]];
      } else if (store[ss]) {
          store[ss].push(strs[i]);
      }
  }

  return Object.values(store);
};