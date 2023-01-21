# Sliding Window

The Sliding window is a problem-solving technique of data structure and algorithm for problems that apply arrays or lists. These problems are painless to solve using a brute force approach in O(n²) or O(n³). However, the Sliding window technique can reduce the time complexity to O(n).

![figure1](https://miro.medium.com/max/720/0*4AzkYhWEX-Ia-G0j.webp)

The basic idea behind the sliding window technique is to transform two nested loops into a single loop.
Below are some fundamental clues to identify such kind of problem:

- The problem will be based on an array, list or string type of data structure.
- It will ask to find subrange in that array or string will have to give longest, shortest, or target values.
- Its concept is mainly based on ideas like the longest sequence or shortest sequence of something that satisfies a given condition perfectly.

If you have an array like below
![figure 2](https://miro.medium.com/max/640/1*LqRML1zu6WY7fqMFoSFmlA.webp)
A sliding window of size 3 would run over it like below:
![figure 3](https://miro.medium.com/max/720/1*04i4nzgAPjvcKwtFaD9odQ.webp)

## Prerequisites to use Sliding Window

The use of Sliding Window technique can be done in a very specific scenario, where the size of window for computation is fixed throughout the complete nested loop. Only then the time complexity can be reduced.

## How to use Sliding Window technique

1- Find the size of window required.
2- Compute the result for 1st window, i.e. from start fo data structure.
3- Use a loop to slide the window by 1, and keep computing the result window by window.

## Example

Given an array of integers of size `n`, Our aim is to calculate the maximum sum of `k` consecutive elements in the array.

``` ts
@input: arr: number[] = [100, 200, 300, 400], k = 2;
@output: 700.

@input: arr: number[] = [1, 4, 2, 10, 23, 3, 1, 0, 20], k = 4
@output: 39

// We get the maximum sum by adding sub array [4, 2, 10, 23] of size 4.

@input: arr: number[] = [2, 3], k = 3
@output: Invalid

// There is no sub array of size 3 as size of whole array is 2.
```

***Brute Force Approach:***
We start with first index and sum till k-th element. We do it for all possible consecutive blocks or groups of k elements. This method requires nested for loop, the outer for loop starts with the starting element of the block of k elements and the inner or the nested loop will add up till the k-th element.

```ts
const maxSum = (arr: number[], k: number): number => {
  let maxSum = Number.MIN_SAFE_NUMBER;
  const n = arr.length;

  for (let i = 0; i < n - k + 1; i++) {
    let currentSum = 0;
    for (let j = 0; j < k; j ++) {
      currentSum += arr[i + j];
    }
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum; // ? Time complexity: O (n * k), Space complexity: O (1).
}
```

## Applying Sliding Window

1- We compute the sum of first k elements out of n terms using a linear loop and store the sum in variable windowSum.
2- Then we will walk linearly through the array till it reaches the end and simultaneously keep track of maximum sum.
3- To get the current sum of block of k elements just subtract the first element from the previous block and add the last element of the current block.

```ts
const maxSum = (arr: number[], k: number): number => {
  let maxSum = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += arr[i];
    maxSum = sum;
  }

  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];

    maxSum = Math.max(max, sum);
  }

  return max;
}
```
