interface Todo{
    id:number,
    title:string,
    completed:boolean
}

class TodoManager{
    private todos: Todo[]  [];

    addTodo(title:string):void{

    }
    getTodos(): Todo[]{
        return this.todos;
    }

    toggleTodo(id:number):void{

    } 

    deleteTodo(id:number):void{

    }

    printTodos():void {

    }
}