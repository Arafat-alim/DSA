//! creating a node class
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    //! creating a node
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }
  //! push method is used to add the element in the end
  push(value) {
    //! creating a newnode
    const newNode = new Node(value);
    //! if no list found
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      //! if list is found
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  //! get method is used to get the desired element
  get(index) {
    //! if no item found then return undefined
    if (index < 0 || index >= this.length) return undefined;

    let temp = this.head;
    for (let i = 0; i < index; i++) {
      temp = temp.next;
    }
    return temp;
  }
  //! set method is used to set the desired element
  set(index, value) {
    let temp = this.get(index); //! re-using the get method
    //! if temp is undefined - no found item or index
    if (temp) {
      temp.value = value;
      return true;
    }
    return false;
  }
}

const myLinkedList = new LinkedList(11);
myLinkedList.push(23);
myLinkedList.push(14);
myLinkedList.push(7);

myLinkedList.set(1, 100);
myLinkedList.get(1);
