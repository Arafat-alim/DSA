//! creating a node class

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! creating a linked List class
class LinkedList {
  constructor(value) {
    //! creating a new node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //! creating a push method -- add node at the end - O(1)
  push(value) {
    //! create a newNode
    const newNode = new Node(value);
    //! if no node found
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! if exiting list found
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

//! creating a linked List
const myLinkedList = new LinkedList(4);
myLinkedList.push(8);
