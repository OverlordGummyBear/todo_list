import TodoItem from "./todo-item.js";

//Want to make it so if an item is not assigned to a project, 
// that it goes directly to the default TodoProject

class TodoProject{
    todoItemList = [];
    
    constructor(name){
        this.name = name;
    }

    get todoItemList(){ return this.todoItemList; }

    addTodoItem(title, description, dueDate, priority){
        this.todoItemList.push(new TodoItem(title, description, dueDate, priority));
    }

    updateTodoItem(todoItemId, title, description, dueDate, priority){

    }

    deleteTodoItem(todoItemId){
        const deleteIndex = this.todoItemList.findIndex((item) => item.id == todoItemId);

        this.todoItemList.splice(deleteIndex, 1);
    }
}

export default TodoProject;


