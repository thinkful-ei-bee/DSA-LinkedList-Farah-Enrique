const LinkedList = require('./LinkedList');
const SLL = new LinkedList();
const reversedList = new LinkedList();
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
    // SLL.remove('Tauhida')
  
  }
  
  main();

function display(list){
let currNode = list.head
    while(currNode !== null){
        console.log(currNode.value)
        currNode = currNode.next
    }
}

// display(SLL)

function size(list){
    let currNode = list.head
    counter = 0
    while(currNode !== null){
        currNode = currNode.next;
        counter ++
    }
    console.log(counter)
}
// size(SLL)

function isEmpty(list){
    if (list.head === null){
        console.log('List is empty')
    } else {
        console.log('List is populated')
    }
}

// isEmpty(SLL)

function findPrevious(list, item){
    let currNode = list.head
  
    while(currNode.next !== null){
        if( currNode.next.value === item){
            console.log(currNode.value)
        } 
            currNode = currNode.next;
    }
}
//findPrevious(SLL, 'Kat')

function findLast(list){
    let currNode = list.head
  
    while(currNode.next !== null){
        currNode = currNode.next;
    }
    if( currNode.next === null){
        console.log(currNode.value)
    } 
}
//findLast(SLL)



// 4. Mystery function 
// It's removing repeats. 
// O(n)

// 5. Reverse list
function reverseList(oldList, newList){
    if(!oldList.head) {
        return null;
    }

    let currNode = oldList.head;
    let nodeValue;
    while(currNode !== null) {
        //console.log(currNode.value)
        nodeValue = currNode.value;
       // console.log(nodeValue);
        newList.insertFirst(nodeValue);
        currNode = currNode.next;
    }

    display(newList);
}

// reverseList(SLL, reversedList);


// 6. 3rd from last
function thirdFromLast(list){
    // check if list is empty
    // set currNode to traverse the list
    // set previousNode behind CurrNode
    // set thirdPrevious behind previousNode
    // get value of thirdPrevious

    if(!list.head) {
        return null;
    }

    let currNode = list.head.next.next;
    let previousNode = list.head.next;
    let thirdPreviousNode = list.head;

    while(currNode.next !== null) {
        currNode = currNode.next;
        previousNode = previousNode.next;
        thirdPreviousNode = thirdPreviousNode.next;
    }
    console.log(thirdPreviousNode.value)
}

// thirdFromLast(SLL);

// 7. Middle of a last
function middleOfList(list){
    let currNode = list.head
    let counter = 0
    let counter2 = 0;
    let middleItem = 0;
    while(currNode !== null){
        currNode = currNode.next;
        counter ++
    }

    middleItem = Math.floor(counter / 2);
    console.log(middleItem);

    if(middleItem !== 0) {
        currNode = list.head
        while((currNode !== null) && (counter2 < middleItem)) {
        currNode = currNode.next;
        counter2++;
        }  
        console.log(currNode.value)
    }
} 
display(SLL);
middleOfList(SLL);

