import TodoItem from "./todo-item.js";

let id = 0;

class TodoProject{
    _todoList;
    _todoItemList = [];
    
    constructor(name){
        this.id = id++; //crypto.randomUUID(); //
        this.name = name;
    }

    getId(){ return this.id; }

    get todoItemList(){ return this._todoItemList; }
    get name(){ return this._name; }
    set name(newName){ this._name = newName; }

    getTodoItem(id){
        return this._todoItemList.find((item) => item.id === id);
    }

    addTodoItem(todoItem){
        //make sure that the same two items cannot be added to a project
        if(this._todoItemList.find((item) => item.id === todoItem.id)) return false;

        this._todoItemList.push(todoItem);
        todoItem.project = this;

        return true;
    }

    removeTodoItem(todoItemId){
        const deleteIndex = this._todoItemList.findIndex((item) => item.id === todoItemId);

        if(deleteIndex === -1) return false;

        this._todoItemList.splice(deleteIndex, 1);

        return true;
    }
}

export default TodoProject;