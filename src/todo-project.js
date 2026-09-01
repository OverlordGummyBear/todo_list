import TodoItem from "./todo-item.js";

let id = 0;

class TodoProject{
    todoItemList = [];
    
    constructor(name){
        this.id = id++; //crypto.randomUUID(); //
        this.name = name;
    }

    get todoItemList(){ return this.todoItemList; }
    get name(){ return this._name; }
    set name(newName){ this._name = newName; }

    getTodoItem(id){
        return this.todoItemList.find((item) => item.id === id);
    }

    addTodoItem(todoItem){
        if(this.todoItemList.find((item) => item.id === todoItem.id)) return false;

        this.todoItemList.push(todoItem);

        return true;
    }

    //move to item class
    updateTodoItem(todoItemId, title, description, dueDate, priority){
        const todoItem = this.todoItemList.find((item) => item.id === todoItemId);

        if(todoItem === undefined) return;

        todoItem.title = title !== null ? title : todoItem.title;
        todoItem.description = description !== null ? description : todoItem.description;
        todoItem.dueDate = dueDate !== null ? dueDate : todoItem.dueDate;
        todoItem.priority = priority !== null ? priority : todoItem.priority;
    }

    //rename to remove item
    deleteTodoItem(todoItemId){
        const deleteIndex = this.todoItemList.findIndex((item) => item.id === todoItemId);

        if(deleteIndex === -1) return;

        this.todoItemList.splice(deleteIndex, 1);
    }
}

export default TodoProject;