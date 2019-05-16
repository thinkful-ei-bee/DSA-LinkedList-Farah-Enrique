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

  insertBefore(itemToAdd, item) {
    // current node start at the head -- .find()
    // current node travels through list until it finds item -- .find()
    // if current node = item, make new node, set new node point to item
    // set next pointer of the previous node to the new node
    if (!this.head) {
      return null;
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
    let newNode = new _Node (itemToAdd, currNode);
    previousNode.next = newNode;
  }

  insertAfter(itemToAdd, itemBefore) {
      // traverse list
      // until current finds itemBefore
      // if current node = itemBefore, make new node, set new node pointer to currentNode.next
      // currentNode.next = newNode
      if (!this.head) {
        return null;
      }
      let currNode = this.head;
      while((currNode !== null) && (currNode.value !== itemBefore)) {
        currNode = currNode.next;
      }

      if (currNode === null) {
        console.log('Item not found');
        return;
      }

      let newNode = new _Node (itemToAdd, currNode.next);
      currNode.next = newNode;
  }

  // Retrieve
  find(item) {
    let currNode = this.head;
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
      this.head = this.head.next;
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


function main(){
  let SLL = new LinkedList();

  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');

  SLL.find('Tauhida');
  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer')
  SLL.insertAfter('Hotdog', 'Helo');

  console.log(SLL.find('Hotdog'));
}

main();