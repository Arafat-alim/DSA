//! unshift - add the node at the begining of the list - O(1)
//! creating a node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! creating a linked list class
class LinkedList {
  constructor(value) {
    //! creating a new node using above node class
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  //! creating a shift method - O(1)
  unshift(value) {
    //! creating a newNode
    const newNode = new Node(value);
    //! check a node is exist or not
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! list is present
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

//! creating a linked list
const myLinkedList = new LinkedList(10);
myLinkedList.unshift(10);
