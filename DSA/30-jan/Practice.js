class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node (value);

        if(this.head == null) {
            this.head = newNode;
        } else {
            let current = this.head;

              while(current.next) {
                current = current.next;
              }
              current.next = newNode;
        } 
        this.size++;
    }

    prependvalue(value) {
        const newNode = new Node(value);
        newNode.next=this.head;
        this.head=newNode;

        this.size++;
    }

    print() {
        let current = this.head;


        while(current.next !==) {}
    }
}

