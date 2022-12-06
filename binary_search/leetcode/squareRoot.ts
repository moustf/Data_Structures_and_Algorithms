function mySqrtOne(x: number): number {
  if (x <= 1) return x;

  let left = 0;
  let right = x;

  while ((right - left) > 1) {
    let mid = left + Math.floor((right - left) / 2);
    let target = Math.floor(mid * mid);

    if (target === x) {
      return mid;
    } else if (target < x) {
      left = mid;
    } else if (target > x) {
      right = mid;
    }
  }

  return left;
};

function mySqrtTwo(x: number): number {
  const target = Math.floor(Math.sqrt(x));

  for (let i = 0; i < x; i++) {
    if (i === target) return i;
    else continue;
  }

  return x;
};

// ! Space complexity: n, does not work with big numbers, the heap will scream out loud XD
function mySqrtThree(x: number): number {
  const range: number[] = [];

  for (let i = 0; i < x; i++) {
    range.push(i);
  }

  let left = 0;
  let right = range.length - 1;
  const target = Math.floor(Math.sqrt(x));

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (range[mid] === target) return range[mid];
    else if (range[mid] < target) left = mid + 1;
    else if (range[mid] > target) right = mid - 1;
  }

  return x;
};

