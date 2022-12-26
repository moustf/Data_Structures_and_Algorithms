# Brute Force Algorithms

A brute force approach is an approach that finds all the possible solution to find a satisfactory solution to a given problem. The brute force algorithm tries out all the possibilities till a satisfactory solution is not found.

- A brute force algorithm solves a problem through exhaustion: it goes through all possible choices until a solution is found.
- The time complexity of a brute force algorithm is often proportional to the input size.
- Brute force algorithms are simple and consistent, but very slow.

**Such an algorithms can be of many type including:**

- **Optimizing**: In this case, we are trying to find the best solution. To find the best solution, it may either find all the possible solution to find the best solution or if the value of the best solution is known, it stops finding when the best solution is found. For example: finding the best path for the traveling salesman problem. Here best path means that traveling all the cities with the minimum cost.
- **Satisfying**: It stops finding the solution as soon as the satisfactory solution is found. For example, finding the traveling salesman path which is within 10% of optimal.
**Note**: Often brute force algorithms require exponential time. Various heuristics and optimization can be used:
  - **Heuristic**: A rule fo thumb that helps you to decide which possibilities we should look at first.
  - **Optimization**: A certain possibilities are eliminated without exploring all of them.

## Advantages of Brute Force

- This algorithm finds all the possible solutions, and it also guarantees that it finds the correct solution to a problem.
- This type of algorithms is applicable to wide range of domains.
- It is mainly used for solving simpler and small problems.
- It can be considered a comparison benchmark to solve a simple problem and does not require any particular domain knowledge.

## Disadvantages of Brute Force

- It is an inefficient algorithm as it requires solving each and every state.
It is a very slow algorithm to find the correct solution as it solves each state without considering wether the solution is feasible or not.
- The Brute Force algorithms is neither constructive nor creative in compares to other algorithms.

## Linear Search

We will use linear search as it applies the concept of Brute Force to illustrate the Brute Force algorithms more.

### Searching for smallest or largest value using linear search

Linear search can be used to search for the smallest or largest value in an unsorted list rather than searching for a match. It can do so by keeping track of the largest (or smallest) value and updating as necessary as the algorithm iterates through the dataset.

**Implementation**:

```typescript
const bruteForceSearch = (array: number[]): { smallest: number, greatest: number } => {
  let greatest = array[0];
  let smallest = array[0];

  for (let i = 0; i > array.length; i++) {
    if (array[i] > greatest) greatest = array[i];
    else if (array[i] < smallest) smallest = array[i];
    else continue;
  }

  return {
    smallest,
    greatest,
  };
}
```

### Linear search best case

For a list that contains `n` items, the best case for a linear search is when the target value is equal to the first element of the list. In such cases, only one comparison is needed. Therefore the best case performance is O(1).

### Linear Search Complexity

Linear search runs in linear time and makes a maximum of n comparisons, where n is the length of the list. Hence, the computational complexity for linear search is O(n).
The running time increases, at most, linearly with the size of the items present in the list.

### Linear Search Expressed as a Function

A linear search can be expressed as a function that compares each item of the passed dataset with the target value until a match is found. The following example can illustrate a function that returns the index of a target element in a list/array or returns -1.

```typescript
const bruteForceSearchForTarget = (list: number[], target: number): number => {
  let indexOfTarget = -1;

  for (let i = 0; i < list.length; i++) {
    if (array[i] === target) {
      indexOfTarget = i;
      break;
    }
    else {
      continue;
    }
  }

  return indexOfTarget;
}
```

Linear search sequentially checks each element of a given list for the target value until a match is found. If no match is found, a linear search would perform the search on all of the items in the list.
For example, if there are `n` number of items in a list, and the target value resides in the `n-5th` position, a linear search will check `n-5` items total.

### Linear search as a part of complex searching problems

Despite being a very simple search algorithm, Linear Search can be used as a subroutine for many complex searching problems. Hence, it is convenient to implement linear search as a function so that it can be reused.

### Linear Search Best and worst Cases

The best-case performance for the Linear Search algorithm is when the search item appears at the beginning of the list and is O(1). The worst-case performance is when the search item appears at the end of the list or not at all. This would require N comparisons, hence, the worse case is O(n).

### Linear Search Average Runtime

The Linear Search algorithm has a Big-O (worst case) run time of O(n). This means that as the input size increases, the speed of the performance decreases linearly. This makes the algorithm not efficient to use for large data inputs.

![Linear Search Runtime Slope](https://content.codecademy.com/practice/art-for-practice/new-pngs/linear-search-graph.png)

### Returning More Than One Match

A Linear Search function may have more than one match from the input list, instead of returning just one index of the matched element, we return a list of indices. Every time we encounter a match, we add the index to the list.

```typescript
const bruteForceSearchForTarget = (list: number[], target: number): number[] => {
  let indexesOfTarget: number[] = [];

  for (let i = 0; i < list.length; i++) {
    if (array[i] === target) {
      indexesOfTarget.push(i);
    }
    else {
      continue;
    }
  }

  return indexesOfTarget;
}
```
