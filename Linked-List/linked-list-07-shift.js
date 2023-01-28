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
    //! creating a new node using node class
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  //! push method is used to add element in the end
  push(value) {
    //! creating a new node
    const newNode = new Node(value);
    //! no list found
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //! shift method is used to remove the first item from the list
  shift() {
    //! if no list found
    if (!this.head) return undefined;
    let temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    //! if one element is present in the list
    if (this.length === 0) {
      this.tail = null;
    }
    return temp;
  }
}

//! creating a new list
const myLinkedList = new LinkedList(14);
myLinkedList.push(14);
myLinkedList.push(78);
myLinkedList.push(214);

myLinkedList.shift();
