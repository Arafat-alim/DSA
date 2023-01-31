class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //! creating a new node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //! push method is used to push the node in the end of the list
  push(value) {
    //! creating a new node
    const newNode = new Node(value);
    //! if single
  }

  //! shift() is used to remove the item from the begining
  shift() {
    //! if node is not present
    if (!this.head) return undefined;
    //! if list is present
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }

  //! pop() is used to remove the item from the end of the list
  pop() {
    //! if node is not prseent
    if (!this.head) return undefined;
    //! if list is present
    const temp = this.head;
    const pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = pre;
    this.length--;

    //! if single node is present
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  //! get method is used to get the desired node from the list
  get(index) {
    //! index is out of range
    if (index < 0 || index > this.length) return undefined;
    const temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  //! remove() is used to remove node in any position(start and end position)
  remove(index) {
    //! index out of range
    if (index < 0 || index >= this.length) return undefined;
    //! remove the node from the beginning
    if (index === 0) return this.shift();
    //! remove the node from the end
    if (index === this.length) return this.pop();
    //! remove the node from any position
    const before = this.get(index - 1);
    const temp = this.get(index);
    before.next = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}

const myLinkedList = new LinkedList(12);
myLinkedList;
