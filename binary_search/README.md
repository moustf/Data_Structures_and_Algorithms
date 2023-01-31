# Binary Search

## Introduction

Suppose we have an array of number `nums`, the size of the array is `n`, and we have a target number `target` that we need to look up it's index in the array. One way to do that is to iterate over the array, checking each element if it's equal to the target element or not, returning the index of the number in the success case, and returning let's say **-1** in the failure case. The time complexity for this approach would be `O(n)`, and the space complexity is `O(1)` since **0** is constant.

*In this case, we can use binary search for enhancing the time complexity*.
The whole idea of binary search is to reduce the space of the search by half in each round. We keep two pointers `left` and `right`, which indicate the current search space(the range between left and right is the expected range the target could lie on).

The initial search space would be from **0** to **n - 1**, because any position in the array could have our target. We will use the formula `left + floor(right - left) / 2` to calculate the `mid` element -since the idea is to split the array in half-.

*Before we start iterating the array, we need to make sure the array is sorted.*
When we start iterating, there will be three scenarios:

- First scenario: if the element at the middle of the array -nums[mid]-, we just return it's index (mid).
- Second scenario; if the element at mid position is smaller than the target, and since the array is sorted, the target element would lie on the right half of the array because all greater elements would be to the right of the middle element, so we need to reassign `left to mid + 1`.
- Third scenario: if the element at the mid position is greater than the target, therefore the target element would be in the left half of the array, now we need to reassign `right to mid - 1`.

Till now, if start iterating, the loop won't know when to stop, what is our termination criteria? If you remember that left and right are our space of search, and to make a valid range, the right need to be greater than or equal to left always. Once left is greater than right, this means we ran out of elements and the search space is empty, so we need to terminate.

## Implementation

***I'm using type script to implement the binary search algorithm, but you can use any language you prefer.***

- Our termination would be:
let us now take an example:

```typescript
const nums = [1, 2, 3, 4, 5, 6];
const target = 5;

const binarySearch = (nums: Array<integer>, target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right>) { // This condition will is to make sure our range of elements actually has elements.
    let mid = Math.floor(left + (right - left) \ 2); // This is where we calculate our mid index.

    if (nums[mid] < target) { // When the target lies on the right half of the array.
      left = mid + 1;
    } else if (nums[mid] > target) { // When the target lies on the left half of the array.
      right = mid - 1;
    } else if (nums[mid] === target) { // When the target equals to the element in the mid position, return it is index.
      return mid;
    }
  }

    return -1; // When the target is not present in the array, return -1;
}
```

*First iteration*:

- left = 0 | right = n - 1 = 5 | mid = 0 + floor(5 - 0) \ 2 = 2 | nums[mid] would be nums[2] = 3.
  - Since the target is 5, and three is less than target, we need to go to the right half of the array.

*Second iteration*:

- left = mid + 1 = 3 | right = 5 | mid = 3 + floor(5 - 3) / 2 = 4 | nums[mid] would be nums[4] = 5.
  - Now we reached the scenario where our target is the at the mid position, and we will return the mid which is 4.

## How to choose between templates?

*Please press **[HERE](./templateAnalysis.md)** to learn how to choose between the three templates in Binary Search.*

### Side notes

- We used the formula `left + Math.floor(right - left) / 2` to avoid overflow. Since most of the languages have their integer data type's most capacity to (2^31) which equals 2,147,483,647, when you try to sum two number of about this range, the result value will overflow the correct result, so the formula that we use is safer than using `(left + right) / 2`.
