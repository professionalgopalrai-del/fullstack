// function linearSearch(arr, target) {
 //   for (let i = 0; i < arr.length; i++) {
   //     if (arr[i] === target) {
     //       return i;
       // }
     //}
 //   return -1;
 // }

 // console.log(linearSearch([5, 3, 8, 4], 8)); // 2
  

 function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9], 7)); // 3
let stack = [];

// Push
stack.push(10);
stack.push(20);

// Pop
console.log(stack.pop()); // 20

// Peek
console.log(stack[stack.length - 1]); // 10


class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

let q = new Queue();
q.enqueue(10);
q.enqueue(20);
console.log(q.dequeue()); // 10
  


class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (!this.root) {
            this.root = newNode;
            return;
        }

        let current = this.root;

        while (true) {
            if (data < current.data) {
                if (!current.left) {
                    current.left = newNode;
                    return;
                }
                current = current.left;
            } else {
                if (!current.right) {
                    current.right = newNode;
                    return;
                }
                current = current.right;
            }
        }
    }

    inorder(node = this.root) {
        if (node) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
}

let tree = new BST();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.insert(20);
tree.insert(40);

tree.inorder(); // Sorted output
