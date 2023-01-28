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
    //! create a node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  //! push method - add element at the end of the list
  push(value) {
    //! create a new Node
    const newNode = new Node(value);
    //! If no node found
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! if any node existed
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  //! Pop Method = Remove an item from the end of the list O(n)
  pop() {
    //! if no element found then return undefined
    if (!this.head) return undefined;

    //! If list exist
    let temp = this.head;
    let pre = this.head;
    while (temp.next) {
      pre = temp;
      temp = temp.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;

    //! if single node found
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }
}

//! creating a single node
const myLinkedList = new LinkedList(10);
myLinkedList.push(12);
