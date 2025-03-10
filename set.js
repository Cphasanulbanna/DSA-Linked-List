

 
 
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
    this.length = 1;
  }

  push(value) {
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

set(index, value){
        let temp= this.get(index)
        if(temp) {
            temp.value= value
            return true
        }
        return false
    }

}


const myLinkedList = new LinkedList(4)

myLinkedList.push(5)
myLinkedList.push(10)
myLinkedList.push(12)

myLinkedList.set(2, 18)
