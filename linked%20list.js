class Node {
  constructor(elem) {
    this.elem = elem;
    this.next = undefined;
  }
}

class singlyLinkedlist3 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(node) {
      node = new Node(node);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length +=1;
  }

  pop() {
    var current = this.head;
    var last = undefined;
    if (this.head === this.tail) {
      last = this.head;
      this.head = this.tail = null
    } else {
      while (current.next != this.tail) {
        current = current.next;
      }
      this.tail = current;
      var last = current.next;
      this.tail.next = undefined;
    }
    this.length--;
    return last.elem;
  }

  shift() {
    var elem = this.head;
    if (elem) {
      this.head = this.head.next;
      return elem.elem;
    }
    return elem.elem;
    this.length++;
  }

  unshift(node) {
    if (!this.head) {
      this.push(node);
    } else {
      node.next = this.head;
      this.head = node;
      this.length++;
    }
  }

  get(index) {
      if(index >length){
          return undefined;
      }else{
          var elem = this.head;
          while(index-->0){
              elem= elem.next;
          }
          return elem;
      }
  }

  set(index,elem){
      prev = this.get(index);
      if(prev){
          prev.elem =elem;
          return true;
      }
      return false
  }

  insert(index,elem){
      var prev = this.get(index-1);
      if(prev){
          var curr= prev.next;
          prev.next= new Node(elem);
          prev.next.next= curr;
          return true;
      }
      return false;
  }

  remove(index){
      var elem = this.get(index-1);
      if(elem.next){
          var tmp= elem.next
          elem.next = elem.next.next;
          return tmp.elem;
      }
  }

  reverse(){
      var elem = this.head;
      var next = this.head;
      var prev = undefined;
      while(next){
        next = elem.next;
        elem.next= prev;
        prev = elem;
        elem= next;
      }
      var tmp = this.head;
      this.head = this.tail;
      this.tail= tmp;


  }

}