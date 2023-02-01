class MyCircularQueue {
  private front: number;
  private rear: number;
  constructor(private k: number, private queue: number[] = []) {
    this.k = k;
    this.queue = queue;
    this.front = -1;
    this.rear = 0;
  }

  enQueue(value: number): boolean {
    if (this.queue.length === this.k) return false;

    this.queue.unshift(value);
    this.front += 1;
    return true;
  }

  deQueue(): boolean {
    if (this.queue.length === 0) return false;

    this.queue.pop();
    this.front -= 1;
    return true;
  }

  Front(): number {
    if (!this.queue.length) return -1;

    return this.queue[this.front];
  }

  Rear(): number {
    if (!this.queue.length) return -1;

    return this.queue[this.rear];
  }

  isEmpty(): boolean {
    return this.queue.length > 0 ? false : true;
  }

  isFull(): boolean {
    return this.queue.length === this.k ? true : false;
  }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
