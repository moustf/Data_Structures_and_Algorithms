# Prefix and Suffix Sum

Prefix sum means that the sum's direction is from left to right, meanwhile the suffix sum's direction is from right to left.

## Prefix Sum

To calculate the prefix sum of an array we just need to grab the previous value of the prefix sum and add the current value of the traversed array. The idea behind is that in the previous position of the prefix array we will have the sum of the previous elements. This becomes really helpful because if you want to know what is the total sum up to certain point, you can just check for the value in the prefix sum array. Another use for this programming tool is when you want to know the value between two positions in the array, without the need of going through each item in the array you can just do a calculation from the values in the prefix sum array, reducing complexity and therefor saving time and money.

### Prefix Implementation

```ts
const prefixSum = (arr: number[]): number[] => {
  // ? Getting the size of the array. t - O(n), s - O(n).
  const size = arr.length;

  // ? Create an empty array of the same size as the the input array.
  const prefixArr = new Array(n);

  // ? Initialize the first position fo the array with the same value as the first number of the input array.
  prefixArr[0] = arr[0];

  // ? Go through the input array, starting in the position 1 to the n.
  for (let i = 1; i < n; i++) {
    prefixArr[i] = prefixArr[i - 1] + arr[i];
  }

  return prefixArr;
} 
```

## Suffix Sum

For the Suffix Sum array, we will use a similar approach to the Prefix Sum, with the slight modification that we wil start from the end and go to the beginning of the array.

### Suffix Implementation

```ts
const suffixSum = (arr: number[]): number[] => {
  const size = arr.length;
  const suffixArr = new Array(n);

  // ? Instead of assigning the first position, we assign the last position with the last number in the input array.
  suffixArr[n - 1] = arr[n - 1];

  // ? Going trough the input array, starting in the last position, until the first.
  for (let i = n - 2; i >= 0; i--) {
    suffixArr[i] = suffixArr[i + 1] + arr[i];
  }

  return suffixArr;
}
```
