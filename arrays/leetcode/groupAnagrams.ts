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

function groupAnagramsTwo(strs: string[]): string[][] {
  const res = strs.reduce((obj, str) => {
      const ss = [...str].sort().join('');
      obj[ss] = obj[ss] ? [...obj[ss], str] : [str];
      // ? obj[ss] = (obj[ss] || []).concat(str);

      return obj;
  }, {});

  return Object.values(res);
};
