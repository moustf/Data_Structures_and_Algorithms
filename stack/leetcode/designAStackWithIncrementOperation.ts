class CustomStackOne {
  private stack: number[] = [];
  private maxSize: number;
  constructor(maxSize: number) {
    this.maxSize = maxSize;
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    if (this.stack.length) {
      return this.stack.pop();
    }

    return -1;
  }

  increment(k: number, val: number): void {
    if (this.stack.length < k) {
      this.stack = this.stack.map((num) => num + val);
    } else {
      for (let i = 0; i < k; i++) {
        this.stack[i] += val;
      }
    }
  }
}

class CustomStack {
  constructor(private maxSize: number, private stack: number[] = []) {
    this.maxSize = maxSize;
    this.stack = stack;
  }

  push(x: number): void {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  pop(): number {
    if (this.stack.length) {
      return this.stack.pop();
    }

    return -1;
  }

  increment(k: number, val: number): void {
    for (let i = 0; i < k && i < this.stack.length; i++) {
      this.stack[i] += val;
    }
  }
}

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
