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

    findMiddleNode() {
        let slowPointer = this.head
        let fastPointer = this.head
        
        while(fastPointer !== null && fastPointer.next !==null) {
            slowPointer = slowPointer.next
            fastPointer = fastPointer.next.next
        }
        return slowPointer
    }

}

const LinkedList = new LinkedList(4)
LinkedList.push(1)
LinkedList.push(2)
LinkedList.push(3)
LinkedList.findMiddleNode() // uses "tortoise and hare" algorithm
    

