class Stack
{
    
    constructer(capacity) {
        this.capacity = capacity;
        this.arr = new Array(this.capacity);
        this.top = -1;
    }
    
    
    push(value) {
        if(this.isFull()) {
            console.log("Stack overFlow");
            return;
        }
    
        return this.arr [++this.top] = value;
    }
    
    pop() {
        if(this.isEmpty()){
            console.log("Stack underflow");
            return -1;
        }
      return this.arr[this.top--];
    
    }
    
    Peek() {
      if(this.isEmpty()){
        console.log("Stack is empty!");
        return this.arr[this.top];
      }
    }
    
    isFull() {
        return this.top === this.capacity -1;
    
    }
    
    isEmpty() {
        return top === -1;
    }
    
    size() {
        return top + 1;
    }
    
    printStack(){
        if(this.isEmpty()) {
            console.log("Stack is empty!");
            return;
        }
        for(let i=top; i>=0; i--) {
            console.log(arr[i]);
        }
    }

}



const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);

stack.printStack();

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.peek());

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size());