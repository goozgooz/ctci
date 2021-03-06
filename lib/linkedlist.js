class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) return this.head = newNode;
    
    let current = this.head;
    while (current) {
      if (!current.next) {
        return current.next = newNode;
      } else {
        current = current.next;
      }
    }
  }
  
  insertHeadNode (node) {
    return this.head = node;
  }
  
  print() {
    if (!this.head) return console.log('No Head Node');
    
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

module.exports = {
  LinkedList: LinkedList,
  Node: Node,
}