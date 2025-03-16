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

  reverse() {
      let temp = this.head
      this.head = this.tail
      this.tail = temp
      let next = temp.next
      let prev = null

      for (let i = 0; i < this.length; i++) {
          next = temp.next
          temp.next = prev
          prev = temp
          temp = next
      }
      return this
  }
}

const LinkedList = new LinkedList(4)
LinkedList.push(1)
LinkedList.push(2)
LinkedList.push(3)
LinkedList.reverse()
