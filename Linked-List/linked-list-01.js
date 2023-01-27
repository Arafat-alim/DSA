//! Creating a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! creating a LinkedList Class
class LinkedList {
  constructor(value) {
    //! creating a newNode with the help of above Node Class
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
}

//! creating a linked List
const myLinkedList = new LinkedList(4);
console.log(myLinkedList);
