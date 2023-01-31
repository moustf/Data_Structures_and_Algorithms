# Stack

A stack is an Abstract Data Type (ADT), commonly used in most programming languages. It is named stack as it behaves like a real-world stack, for example a deck of cards or a pile of plates, etc.

A real-world allows operations at one end only. For example, we can place or remove a card or plate from the top of the stack only. Likewise, Stack ADT allows all data operations at one end only. At any given time, we can only access the top element of a stack.

This feature makes it LIFO data structure. LIFO stands for last-in-first-out. Here, the element which is placed (inserted or added) last, is accessed first. In stack terminology, insertion operation is called **PUSH** operation and removal operation is called **POP** operation.

## Stack Representation

The following diagram depicts a stack and its operations -
![stack explanation](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)
A stack can be implemented by means of Array, Structure, Pointer, and Linked List. Stack can either be a fixed size one or it may have a sense of dynamic resizing. Here, we are going to implement stack using arrays, which makes it a fixed size stack implementation.

## Basic Operations

Stack operations may involve initializing the stack, using it and then de-initializing it. Apart from these basic stuffs, a stack is used for the following two primary operations.

- **push()**: Pushing (storing) an element on the stack.
- **pop()**: Removing (accessing) an element from the stack.

To use a stack efficiently we need to check the status of stack as well. For the same purpose, the following functionality is added to stacks:

- **peek()**: Get the top data element of the stack, without removing it.
- **isFull()**: Check if stack is full.
- **isEmpty()**: Checkout if stack is empty.

At all times, we maintain a pointer to the last pushed data on the stack. As this pointer always represents the top of the stack, hence named **top**. The **top** pointer provides top value of the stack without actually removing it.

First, we should learn about procedures to support stack functions:

- **peek()**:
Algorithm of peek() function:

```sudo
begin procedure peek
  return stack[top]
end procedure
```

Implementation of peek() function in TypeScript programing language:

```ts
// Arrow function notation.
const peek = (): number => stack[top];
// Class method notation.
peek(): number {
  return stack[top];
}
```

- **isFull()**:
Algorithm fo isFull() function:

```sudo
begin procedure isfull

  if top equals to MAXSIZE
    return true
  else
    return false
  endif
   
end procedure
```

Implementation of isFull() function in TypeScript programing language:

```ts
// Arrow function notation.
const isFull = (): boolean => {
  if (top === stack.length) {
    return true;
  } else {
    return false;
  }
}
// Class method notation.
peek(): boolean {
  if (top === stack.length) {
    return true;
  } else {
    return false;
  }
}
```

- **isEmpty()**:
Algorithm of isEmpty() function:

```sudo
begin procedure isempty

  if top less than 1
    return true
  else
    return false
  endif

end procedure
```

```ts
// Arrow function notation.
const isEmpty = (): boolean => {
  if (top <= 0) {
    return true;
  } else {
    return false;
  }
}
// Class method notation
isEmpty(): boolean {
  if (top <= 0) {
    return true;
  } else {
    return false;
  }
}
```

## Push Operation

The process of putting a new data element onto stack is known as a Push Operation. Push operation involves a series of steps:

- **Step 1**: Checks if the stack is full.
- **Step 2**: If the stack is full, produce an error and exit.
- **Step 3**: If the stack is not full, increments top to point next empty space.
- **Step 4**: Adds data element to the stack location, where top is pointing.
- **Step 5**: Returns success.
![Push operation](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_push_operation.jpg)
If the linked list is used to implement the stack, then in step 3, we need to allocate space dynamically.

## Algorithm for Push Operation

A simple algorithm for Push operation can be derived as follows:

```sudo
begin procedure push: stack, data

  if stack is full
    return null
  endif

  top ← top + 1
  stack[top] ← data

end procedure
```

To illustrate the steps above, this is an implementation using C programing language.

```c
void push(int data) {
  if (!isFull()) {
    top = top + 1;
    stack[top] = data;
  } else {
    printf('Could not insert data, Stack is full.\n');
  }
}
```

Implementation using TypeScript programing language.

```ts
// Arrow function notation.
const push = (data: number): void => {
  // ? Since the arrays are dynamic in typescript/javascript, we can always add new numbers to the stack.
  top = top + 1;
  stack[top] = data; // stack[stack.length] = data;
}
// Class notation function.
push(): void {
  top = top + 1;
  stack[top] = data;
}
```

## Pop Operation

Accessing the content while removing it from the stack, is known as a Pop Operation. In an array implementation of pop() operation, the data element is not actually removed, instead top is decremented to a lower position in the stack to point to the next value. But in linked-list implementation, pop() actually removes data element and de-allocates memory space.

A pop operation may involve the following steps:

- **Step 1**: Checks if the stack is empty.
- **Step 2**: If the stack is empty, produces an error and exit.
- **Step 3**: if the stack is not empty, accesses the data element at which **top** is pointing
- **Step 4**: Decreases the value of top by 1.
- **Step 5**: Returns success.
![Pop operation](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_pop_operation.jpg)

Algorithm for Pop operation can be derived as follows:

```sudo
begin procedure pop: stack

  if stack is empty
    return null
  endif

  data ← stack[top]
  top ← top - 1
  return data

end procedure
```

To illustrate the steps above, this is an implementation using C programing language.

```c
int pop() {
  if (!isEmpty()) {
    int data = stack[top];
    top = top - 1;
    return data;
  } else {
    printf("Could not retrieve data, Stack is empty.\n");
  }
}
```

Implementation using TypeScript programing language.

```ts
// Arrow function notation.
const pop = (): number {
  if (isEmpty()) {
    throw new Error('The stack is empty');
  }
  const data = data.length - 1;
  top = top - 1;
  return data;
}
// Class method notation.
pop(): number {
  if (isEmpty()) {
      throw new Error('The stack is empty');
    }
  const data = data.length - 1;
  top = top - 1;
  return data;
}
```
