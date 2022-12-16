function findClosestElements(arr: number[], k: number, x: number): number[] {
  let left = 0;
  let right = arr.length - 1;
  const answer: number[] = [];

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    // ? Instead of finding the x position in the array, we can find the left boundary index of the of the k elements
    // ? subarray closest to x.
    // * (x - arr[mid]): for sure x element would be greater than it's left boundary since the array is sorted, so we
    // * subtracted arr[mid] from x to catch the positive values.
    // * (arr[mid + k] - x): and now x element would be smaller than it's right boundary since the array is sorted, so we
    // * subtracted x from arr[mid + k] and added k to mid to get the right boundary.
    if (x - arr[mid] > arr[mid + k] - x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // ? here we are adding the the search space to the result, and we used it like this to work with the least search space
  // ? which is one element, since arr.slice(left, k) will fail in some edge cases!
  for (let i = 0; i < k; i++) {
    answer.push(arr[left + i]);
  }

  return answer;
};