//! creating a node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! Creating a linked list
class LinkedList {
  constructor(value) {
    //! creating a node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  //! Push method is used to add the element at the end of the list
  push(value) {
    //! creating a new node
    const newNode = new Node(value);
    //! if no node found
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! if list is found then add the element at the end
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //! reverse method is used to reverse the whole linked list
  reverse() {
    //! taking a temp var for storing the head pointer
    const temp = this.head;
    //! exchanging the head to tail and tail to head
    this.head = this.tail;
    this.tail = this.head;
    //! creating a next variable
    const next = temp.next;
    //! creating a prev variable
    const prev = null;

    //! now reversing logic
    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }
    return this;
  }
}

//! creating an input
const myLinkedList = new LinkedList(0);
myLinkedList;

myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(4);
