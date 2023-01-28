//! creating a node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! creating a linked list
class LinkedList {
  constructor(value) {
    //! creating a new node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  //! push
  push(value) {
    //! creating a new node
    const newNode = new Node(value);
    //! if no list found
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! if linked list is found
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //! get method is to get the desired linked list
  get(index) {
    //! if we want to access the -1 index and more than existing list index
    if (index < 0 || index >= this.length) return undefined;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
}

//!  creating a list
const myLinkedList = new LinkedList(2);
