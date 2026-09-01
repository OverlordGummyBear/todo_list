import TodoItem from "./todo-item.js";

//Want to make it so if an item is not assigned to a project, 
// that it goes directly to the default TodoProject

class TodoProject{
    todoItemList = [];
    
    constructor(name){
        this.id = crypto.randomUUID();
        this.name = name;
    }

    get id(){ return this._id; }
    get todoItemList(){ return this.todoItemList; }
    get name(){ return this._name; }
    set name(newName){ this._name = newName; }

    addTodoItem(title, description, dueDate, priority){
        this.todoItemList.push(new TodoItem(title, description, dueDate, priority));
    }

    updateTodoItem(todoItemId, title, description, dueDate, priority){
        const todoItem = this.todoItemList.find((item) => item.id === todoItemId);

        if(todoItem === undefined) return;

        todoItem.title = title !== null ? title : todoItem.title;
        todoItem.description = description !== null ? description : todoItem.description;
        todoItem.dueDate = dueDate !== null ? dueDate : todoItem.dueDate;
        todoItem.priority = priority !== null ? priority : todoItem.priority;
    }

    deleteTodoItem(todoItemId){
        const deleteIndex = this.todoItemList.findIndex((item) => item.id === todoItemId);

        if(deleteIndex === -1) return;

        this.todoItemList.splice(deleteIndex, 1);
    }
}

export default TodoProject;


