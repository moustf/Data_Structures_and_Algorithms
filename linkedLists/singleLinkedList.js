class Node {
  constructor (data, next = null) {
    this.data = data; // * The value of the actual data in the node.
    this.next  = next; // * The reference to the next node.
  }
}

const node = new Node(777);

class SingleLinkedList {
  constructor () {
    this.head  = null;
    this.size = 0;
  }

  insertAtStart (data) {
    const newNode = new Node(data);
    if (this.size === 0) { // ? !this.head
      this.head = newNode;
      this.size += 1;
    } else {
      const tempHead = this.head;
      this.head = newNode;
      this.head.next = tempHead;
      this.size += 1;
    }
    return this.head;
  }

  insertAtEnd (data) {
    const newNode = new Node(data);
    if (this.size === 0) { // ? !this.head
      this.head = newNode;
      this.size += 1;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next; 
      }
      currentNode.next = newNode;
      this.size += 1;
    }
    return newNode;
  }

  insertAtIndex (ind, data) {
    if (ind > 0 && ind > this.size) return -1;
    if (!this.head) return this.insertAtStart(data);

    let counter = 0;
    let target = this.head;
    let previous;
    while (counter < ind) {
      previous = target;
      target = target.next;
      counter += 1;
    }

    const newNode = new Node(data);
    previous.next = newNode;
    newNode.next = target;
    this.size += 1;

    return newNode;
  }

  insertWithArray (ind, arr) {
    if (!arr[0]) return -1;
    for (let i = 0; i < arr.length; i++) {
      this.insertAtIndex(ind, arr[i]);
      ind += 1;
    }
    return this.size;
  }

  popAtIndex (ind) {
    if ((ind > 0 && ind > this.size) || this.size === 0) return -1;
    if (ind === 0 && this.size > 0) {
      this.head = this.head.next;
      this.size -= 1;
    }

    let counter = 0;
    let target = this.head;
    let previous;
    while (counter < ind) {
      previous = target;
      target = target.next;
      counter += 1;
    }

    previous.next = target.next;
    this.size -= 1;

    return target;
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

const linkedList = new SingleLinkedList();
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
