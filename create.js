class Node{
    constructor(value) {
        this.value= value;
        this.next = null 
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail= newNode
        this.length = 1
    }
}


console.log(new LinkedList(4))