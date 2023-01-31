function tribonacciOne(n: number): number {
  const res = [1, 1];

  if (n === 0) return 0;
  if (n === 1 || n === 2) return 1;

  for (let i = 3; i <= n; i++) {
      res.push(
          res.length > 3
              ? res.slice(res.length - 3, res.length).reduce((a, b) => a + b, 0)
              : res.reduce((a, b) => a + b, 0)
      );
  }

  return res[n - 1];
};

function tribonacciTwo(n: number): number {
  const res = [0, 1, 1, 0];

  if (n < 3) return res[n];

  // ? Since we only consierned with the latest three elements, we can only store the count of the previouse
  // ? three elements to the n element.

  for (let i = 3; i <= n; i++) {
      res[3] = res[0] + res[1] + res[2];

      // ? Moving the tribonacci numbers one place further! SMART.
      for (let c = 0; c < 3; c++) {
          res[c] = res[c + 1];
      }
  }

  return res[res.length - 1]; // ? can be res[3].
};

const trib = [0, 1, 1];
function tribonacciThree(n: number): number {
    if (trib[n] !== undefined) return trib[n];

    return trib[n] = tribonacciThree(n - 1) + tribonacciThree(n - 2) + tribonacciThree(n - 3);
};
