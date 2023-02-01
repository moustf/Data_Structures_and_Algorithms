class ProductOfNumbersOne {
  private queue: number[] = [];
  constructor() {}

  add(num: number): void {
    this.queue.unshift(num);
  }

  getProduct(k: number): number {
    return this.queue.slice(0, k).reduce((a, b) => a * b);
  }
}

class ProductOfNumbersTwo {
  private queue: number[] = [];
  constructor() {}

  add(num: number): void {
    for (let m = this.queue.length; m > 0; m--) {
      this.queue[m] = this.queue[m - 1];
    }
    this.queue[0] = num;
  }

  getProduct(k: number): number {
    let product = 1;

    for (let i = 0; i < k; i++) {
      product *= this.queue[i];
    }

    return product;
  }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */
