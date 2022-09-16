class Node {
  constructor (data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}

const newNode = new Node(77);

class DoubleLinkedList {
  constructor () {
    this.head = null;
    this.size = 0;
  }

  insertAtStart (data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size += 1;
    } else {
      const tempHead = this.head;
      this.head = newNode;
      this.head.next = tempHead;
      tempHead.prev = this.head;
      this.size += 1;
    }

    return this.head;
  }

  insertAtEnd (data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.size +=  1;
    } else {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = newNode;
      newNode.prev = tail;
      this.size += 1;
    }
    return newNode;
  }

  insertAtIndex (ind, data) {
    if (ind > 0 && ind > this.size) return -1;
    if (!this.head) return this.insertAtStart(data);

    const newNode = new Node(data);
    let counter = 0;
    let target = this.head;
    let previous;
    while (counter < ind) {
      previous = target;
      target = target.next;
      counter += 1;
    }
    previous.next = newNode;
    newNode.prev = previous;
    target.prev = newNode;
    newNode.next = target;
    this.size += 1;

    return newNode;
  }

  insertWithArray (ind, arr) {
    if (!arr[0]) return -1;
    for (let i = 0; i < arr.length; i++) {
      this.insertAtIndex(ind, arr[i]);
      ind++;
    }
    return this.length;
  }

  popAtIndex (ind) {
    if ((ind > 0 && ind > this.size) || this.size === 0) return -1;

    if (ind == 0 && this.size > 0) {
      const tempHead = this.head;
      this.head = this.head.next;
      this.head.prev = null;
      this.size -= 1;
      return tempHead;
    } else {
      let counter = 0;
      let target = this.head;
      let previous;

      while (counter < ind) {
        previous = target;
        target = target.next;
        counter += 1
      }

      previous.next = target.next;
      target.next.prev = previous;
      this.size -= 1;
      return target;
    }
  }

  printAll () {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode);
      currentNode = currentNode.next;
    }
  }
}

// ! Testing the linked List;

const linkedList = new DoubleLinkedList();
linkedList.insertAtStart(7);
linkedList.insertAtEnd(77);
linkedList.insertAtEnd(7771);
linkedList.insertAtEnd(7772);
linkedList.insertAtEnd(7773);
linkedList.insertAtEnd(7777);
linkedList.insertAtIndex(1, 5);
console.log(linkedList.size);
console.log(linkedList.printAll());

console.log('------------------------------------------------');

linkedList.popAtIndex(1);
console.log(linkedList.size);
console.log(linkedList.printAll());

console.log('------------------------------------------------');

linkedList.popAtIndex(3);
console.log(linkedList.size);
console.log(linkedList.printAll());

console.log('------------------------------------------------');

linkedList.insertWithArray(2, [1, 2, 3]);
console.log(linkedList.size);
console.log(linkedList.printAll());
