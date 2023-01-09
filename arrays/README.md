# Arrays

This is a guid to explain arrays in data structures.

## What are arrays in Data Structures?

![arrays](https://www.simplilearn.com/ice9/free_resources_article_thumb/Vaibhav-Arrays%20Article/Arrays_in_ds-what-is-array-img1.PNG)

**An array is a linear data structure that collects elements of the same data type and stores them in contiguous and adjacent memory locations. Arrays work on an index system starting from 0 to (n-1), where n is the size of the array.**

## Importance of Arrays

Let's suppose a class consists of ten students, and the class has to publish their results. If you had declared all ten variables individually, it would be challenging to manipulate and maintain the data.

If more students were to join, it would become more difficult to declare all the variables and keep track of it. To overcome this problem, arrays came into the picture.

## Types of Arrays

There are mainly two types of the arrays, they are:

- **One-Dimensional Arrays:**

![one-d arrays](https://www.simplilearn.com/ice9/free_resources_article_thumb/Vaibhav-Arrays%20Article/Arrays_in_ds-array-type-1d-img1.PNG)
You can imagine a 1d array as a row, where elements are stored one after another.

- **Multi-Dimensional Arrays:**

These multi-dimensional arrays are again of two types. they are:

- *Two-Dimensional Arrays:*

![2 d arrays](https://www.simplilearn.com/ice9/free_resources_article_thumb/Vaibhav-Arrays%20Article/Arrays_in_ds-array-type-2d-img1.PNG)
You can imagine it like a table where each cell contains elements.

- *Three-Dimensional Arrays:*
![3 d arrays](https://www.simplilearn.com/ice9/free_resources_article_thumb/Vaibhav-Arrays%20Article/Arrays_in_ds-array-type-3d-img1.PNG)
You can imagine it like a cuboid made up of smaller cuboids where each cuboid can contain an element.

### Initializing an Array In TypeScript

You can initialize an array in three different steps
1-

``` typescript
const arr: number[] = [0, 1, 2, 3, 4, 5];

```

2-

``` typescript
const arr: number[] = new Array(5); // You can omit the length in the array class invocation.
```

3-

``` typescript
const greetings: string[] = new Array('Hi', 'Hello', 'Good Morning', 'Good Afternoon', 'Good Evening');
```

### Accessing Elements in Arrays

You can access elements with the help of the index at which you stored them. Let's discuss it with a code:

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];

console.log(nums[0]); // ? 0
console.log(nums[1]); // ? 1
console.log(nums[2]); // ? 2
console.log(nums[3]); // ? 3
console.log(nums[4]); // ? 4
console.log(nums[5]); // ? 5
```

### Operations on an Array

- **Traversal.**
- **Insertion.**
- **Deletion.**
- **Searching.**
- **Storing.**

#### Traversing an Array

Traversal in an array is a process of visiting each element once.

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]); // 0 -> 1 -> 2 -> 3 -> 4 -> 5
}
```

#### Insertion

Insertion in an array is the process of including one or more elements in an array.
Insertion of an element can be done:

- At the beginning
- At the end and
- At any given index of an array.

##### At the begging

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];
const numberToAdd = -1;

for (let i = nums.length; i > 0; i--) {
  nums[i] = nums[i - 1];
}

nums[0] = numberToAdd;

// ! OR

nums.unshift(numberToAdd);
```

##### At the end

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];
const numberToAdd = -1;

nums[nums.length] = numberToAdd;
// ? OR
nums.push(numberToAdd);
```

##### At a specific position

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];
const positionToAdd = 3;
const numberToAdd = -1;

for (let i = nums.length; i > positionToAdd; i++) {
  nums[i] = num[i + 1];
}

nums[positionToAdd] = numberToAdd;
```

#### Deletion

Deletion of an element is the process of removing the desired element and re-organizing it.

You can also do deletion in different ways:

- At the beginning.
- At the end.

##### At the begging

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) {
  nums[i] = nums[i + 1];
}

// OR

nums.shift();
```

##### At the end

```typescript
const nums: number[] = [0, 1, 2, 3, 4, 5];

nums.length = nums.length - 1;

// OR

nums.pop();
```

#### Searching for an Element

The method of searching for a specific value in an array is known as searching.
There are two ways we can search in an array, they are:

- **Linear Search.**
- **Binary Search.**

##### Linear Search

```typescript
const findNumber = (nums: number[], numberToSearchFor: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === numberToSearchFor) return i;
  }

  return -1;
}
```

##### Binary Search

```typescript
const nums = [1, 2, 3, 4, 5, 6];
const target = 5;

const binarySearch = (nums: Array<integer>, target: number): number => {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right>) { // This condition will is to make sure our range of elements actually has elements.
    let mid = left + Math.floor((right - left) \ 2); // This is where we calculate our mid index.

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

#### Sorting

Sorting in an array is the process in which it sorts elements in a user-defined order.

```typescript
const nums = [1, 2, 3, 4, 5, 6];
const target = 5;
let temp: number;

for (let i = 0; i < nums.length; i++) {
  for (let j = I + 1; j < nums.length; j++) {
    if (nums[i] > nums[j]) {
      temp = nums[i];
      nums[i] = nums[j];
      nums[i] = temp;
    }
  }
}
```

### What are the advantages of the array in data structure

- Arrays store multiple elements of the same type with the same name.
- You can randomly access elements in the array using an index number.
- Array memory is predefined, so there is no extra memory loss.
- Arrays avoid memory overflow.
- 2D arrays can efficiently represent the tabular data.

### What are the disadvantages of the array in data structure

- The number of elements in an array should be predefined
- An array is static. It cannot alter its size after declaration.
- Insertion and deletion operation in an array is quite tricky as the array stores elements in continuous form.
- Allocating excess memory than required may lead to memory wastage.
