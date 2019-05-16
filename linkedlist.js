/* 
1. Walk through the linked list code in the curriculum and understand it well. Then write a linked list class and its core functions (insertFirst, insertLast, remove, find from scratch. */

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}


class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insertion
  insertFirst(item) {
    this.head = new _Node(item, this.head)
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null)
    }
  }

  // Retrieve
  find(item) {
    let currNode = this.hand;
    if(!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if(currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next
      }
    }
    return currNode;
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    //   if item you want to delete is the first item in list
    if (this.head.value === item) {
      this.header = this.head.next;
      return; 
    }

    let currNode = this.head;
    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

