const LinkedList = require('./LinkedList');
const SLL = new LinkedList();
const _Node = require('./linkedlist.js')
const Node = new _Node();




function main(){
  
  
    SLL.insertFirst('Apollo');
    SLL.insertLast('Boomer');
    SLL.insertLast('Helo');
    SLL.insertLast('Husker');
    SLL.insertLast('Starbuck');
    SLL.insertLast('Tauhida');
  
    SLL.find('Tauhida');
    
  
    SLL.insertBefore('Athena', 'Boomer')
    SLL.insertAfter('Hotdog', 'Helo');
  
    SLL.insertAt('Kat', 3)
    SLL.remove('Tauhida')
  
  }
  
  main();

function display(list){
let currNode = list.head
    while(currNode !== null){
        console.log(currNode.value)
        currNode = currNode.next
    }
}

display(SLL)

function size(list){
    let currNode = list.head
    counter = 0
    while(currNode !== null){
        currNode = currNode.next;
        counter ++
    }
    console.log(counter)
}
size(SLL)

function isEmpty(list){
    if (list.head === null){
        console.log('List is empty')
    } else {
        console.log('List is populated')
    }
}

isEmpty(SLL)

function findPrevious(list, item){
    let currNode = list.head
  
    while(currNode.next !== null){
        if( currNode.next.value === item){
            console.log(currNode.value)
        } 
            currNode = currNode.next;
    }
}
findPrevious(SLL, 'Kat')

function findLast(list){
    let currNode = list.head
  
    while(currNode.next !== null){
        currNode = currNode.next;
    }
    if( currNode.next === null){
        console.log(currNode.value)
    } 
}
findLast(SLL)