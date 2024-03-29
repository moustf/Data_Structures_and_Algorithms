# Queue

Queue is an Abstract Data Structure (ADT), somewhat similar to stack. Unlike stacks, a queue is open at both its ends. One end is always used to insert data (enqueue) and the other is used to remove data (dequeue). Queue follows First-In-First-Out methodology, i.e., the data item stored first will be accessed first.

![queue example](https://www.tutorialspoint.com/data_structures_algorithms/images/queue_example.jpg)

A real-world example of queue can be a single-lane one-way road, where the vehicle enters first, exits first. More real-world examples can be seen as queues at the ticket windows and bus-stops.

## Queue Representation

As we now understand that in queue, we access both ends for different reasons. The following diagram given below tries to explain queue representation as data structure.

![queue data structure](https://www.tutorialspoint.com/data_structures_algorithms/images/queue_diagram.jpg)

As in stacks, a queue can also be implemented using Arrays, Linked Lists, Pointers, and Structures. For the sake of simplicity, we shall implement the queues using one-dimensional array.

## Basic Operations

Queue operations may involve initializing or defining the queue, utilizing it, and then completely erasing it from the memory. Here we shall try to understand the basic operations associated with queues.

- **enqueue()**: Add (store) an item to the queue.
- **dequeue()**: remove (access) an item from the queue.

Few more functions are required to make the above-mentioned queue operation efficient. These are:

- **peek()**: Gets the element at the front of the queue without removing it.
- **isFull()**: Checks if the queue is full.
- **isEmpty()**: Checks fi the queue is empty.

In queue, we always dequeue (or access) data, pointed by **front** pointer and while enqueing (or storing) data in the queue we take help or **rear** pointer.

Let's first learn about supportive methods of a queue.

### peek()

This function helps to see the data at the **front** of the queue. The algorithms of peek() function is as follows:

```sudo
begin procedure peek
  return queue[front]
end procedure
```

Implementation of peek() method in TypeScript programming language:

```typescript
// Arrow function notation.
const peek = (): number => queue[front];
// Class method notation.
peek(): number {
  return queue[front];
}
```

### isFull()

As we are using single dimension array to implement queue, we just check for the rear pointer to reach at MAXSIZE to determine that the queue is full. In case we maintain the queue in a circular linked-list, the algorithm will differ.

```sudo
begin procedure isFull

  if rear equals to MAXSIZE
    return true
  else
    return false
  endif

end procedure
```

Implementation of isFull() method in TypeScript programming language

```ts
// Arrow function notation.
const isFull = (): boolean => {
  if (rear === queue.length) {
    return true;
  } else {
    return false;
  }
}
// Class method notation.
isFull(): boolean {
  if (rear === queue.length) {
    return true;
  } else {
    return false;
  }
}
```

### isEmpty()

The sudo code for isEmpty function:

```sudo
begin procedure isEmpty

  if front is less than MIN or front is greater than rear
    return true
  else
    return false
  endif

end procedure
```

If the value of **front** is less than MIN or 0, it tells that the queue is not yet initialized, hence empty.

```ts
// Arrow function notation.
const isEmpty = (): boolean => {
  if (front < 0 || front > rear) {
    return true;
  } else {
    return false;
  }
}
// Class method notation.
isEmpty(): boolean {
  if (front < 0 || front > rear) {
    return true;
  } else {
    return false;
  }
}
```

## Enqueue Operation

Queues maintain two data pointers, **front** and **rear**. Therefore, its operations are comparatively difficult to implement than that of stacks.
The following steps should be taken to enqueue (insert) data into a queue:

- **Step 1**: Check if the queue is full.
- **Step 2**: If the queue is full, produce overflow error and exit.
- **Step 3**: If the queue is not full, increment rear pointer to point at the next empty space.
- **Step 4**: Add data element to the queue location, where the rear is pointing.
- **Step 5**: Return success.

![enqueue operation](https://www.tutorialspoint.com/data_structures_algorithms/images/queue_enqueue_diagram.jpg)

Sometimes, we also check to see if a queue is initialized or not, to handle any unforeseen situations.

Sudo code for enqueue operation:

```sudo
begin procedure enqueue(data)      

  if queue is full
    return overflow
  endif

  rear ← rear + 1
  queue[rear] ← data
  return true

end procedure
```

Implementation of enqueue() method in TypeScript programming language

```ts
// Arrow function notation.
const enqueue = (): number => {
  if (isFull()) return 0;

  rear += 1;
  queue[rear] = data;

  return 1;
}
// Class method notation.
enqueue(): number {
  if (isFull()) return 0;

  rear += 1;
  queue[rear] = data;

  return 1;
}
```

## Dequeue Operation

Accessing data from the queue is a process of two tasks − access the data where **front** is pointing and remove the data after access. The following steps are taken to perform **dequeue** operation:

- **Step 1**: Check if the queue is empty.
- **Step 2**: If the queue is empty, produce underflow error and exit.
- **Step 3**: If the queue is not empty, access the data where front is pointing.
- **Step 4**: Increment front pointer to point to the next available data element.
- **Step 5**: Return success.

![dequeue operation](https://www.tutorialspoint.com/data_structures_algorithms/images/queue_dequeue_diagram.jpg)

Sudo code for the dequeue operation:

```sudo
begin procedure dequeue

  if queue is empty
    return underflow
  end if

  data = queue[front]
  front ← front + 1
  return true

end procedure
```

Implementation of dequeue() method in TypeScript programming language

```ts
// Arrow function notation.
const dequeue = (): number => {
  if (isEmpty()) return 0;

  const data = queue[front];
  front += 1;

  return data;
}
// Class method notation.
dequeue(): number {
  if (isEmpty()) return 0;

  const data = queue[front];
  front += 1;

  return data;
}
```
