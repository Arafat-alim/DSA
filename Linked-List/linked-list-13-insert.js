//! creating a class node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

//! creating a linked list
class LinkedList {
  constructor(value) {
    //! creating a newnode
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  //! unshift() method is used to add the new node in the beginning of the list
  unshift(value) {
    //! creaiing a new node
    const newNode = new Node(value);
    //! No single node is exist
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! if list is present
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  //! push() method is used to add the new node at the end of the list
  push(value) {
    //! create a node
    const newNode = new Node(value);
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

  //! get() method is used to get the desired element in the list
  get(index) {
    // if the index is out of range
    if (index < 0 || index > this.length) return false;
    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }

  //! insert() method is used to insert a node in any of the list
  insert(index, value) {
    //! inserting the node in the begining of the list
    if (index === 0) return this.unshift(value);

    //! inserting the node in the end of the list
    if (index === this.length) return this.push(value);

    //! adding node is out of tange -1 or more than length
    if (index < 0 || index > this.length) return false;

    //! if addingg the new node in the middle of the list
    //! creating a new node
    const newNode = new Node(value);
    //! find out the desired index, but want one spot before element
    const temp = this.get(index - 1);
    newNode.next = temp.next;
    temp.next = newNode;
    this.length++;
    return true;
  }
}

const myLinkedList = new LinkedList(11);
myLinkedList.push(12);
myLinkedList.push(10);
myLinkedList.push(1);
