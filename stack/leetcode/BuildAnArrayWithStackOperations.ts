function buildArrayOne(target: number[], n: number): string[] {
  const res: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (target.includes(i)) {
      res.push("Push");
    } else {
      res.push("Push");
      res.push("Pop");
    }

    if (i === target[target.length - 1]) break;
  }

  return res;
}

function buildArrayTwo(target: number[], n: number): string[] {
  const res: string[] = [];
  let count = 0;

  for (let i = 1; i <= n; i++) {
    if (count === target.length) {
      return res;
    }

    res.push("Push");

    if (i !== target[count++]) {
      res.push("Pop");
      count -= 1;
      console.log(i, target[count]);
    }
  }

  return res;
}
