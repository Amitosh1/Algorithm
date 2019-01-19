class Node {
    constructor(elem) {
        this.elem = elem;
        this.next = undefined;
        this.prev = undefined;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(elem) {
        var node = new Node(elem);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length += 1;
        return this;
    }

    pop() {
        if (!this.head)
            return undefined;
        var last = this.tail.elem;
        this.tail = this.tail.prev;
        this.tail.next = undefined;
        if (this.length === 1) {
            this.tail = undefined;
            this.head = undefined;
        }
        this.length -= 1;
        return last;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        } else {
            var prevHead = this.head;
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = undefined;
            }
            this.length -= 1;
            return prevHead.elem;
        }
    }

    unshift(elem) {
        if (this.length === 0) {
            this.push(elem);
        } else {
            var prev = this.head;
            this.head = new Node(elem);
            this.head.next = prev;
            prev.prev = this.head;
            this.length += 1;
        }
    }

    get(pos) {
        if (pos < 0 || pos >= this.length) {
            return null;
        } else {
            if (pos <= Math.floor(length / 2)) {
                var elem = this.head;
                while (pos-- > 0) {
                    elem = elem.next;
                }
                return elem;
            } else {
                pos = this.length - pos;
                var elem = this.tail;
                while (--pos > 0) {
                    elem = elem.prev;
                }
                return elem;
            }
        }
    }

    insert(elem, pos) {
        if (pos > this.length) {
            return false
        } else {
            var prev = this.get(pos - 1);
            var prevNxt = prev.next;
            prev.next = new Node(elem);
            prev.next.next = prevNxt;
            prev.next.prev = prev;
            this.length++;
        }
    }
    remove(pos) {
        if (pos < 0 || pos >= this.length) {
            return false;
        } else {
            var prev = this.get(pos - 1);
            var elem = prev.next;
            prev.next = elem.next;
            elem.prev = undefined;
            elem.next = undefined;
            this.length -= 1;
            return elem
        }
    }

    reverse() {
        var elem = this.head;
        var prev = undefined
          , next = undefined;
        while (elem) {
            next = elem.next;
            elem.next = elem.prev;
            elem.prev = next;
            elem = next;
        }
        var tmp = this.head;
        this.head = this.tail;
        this.tail = tmp;
        return list;
    }
}
