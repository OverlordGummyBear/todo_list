import TodoProject from "./todo-project";

class TodoList{
    todoProjectList = [];
    
    constructor(){
        this.todoProjectList.push(new TodoProject("Inbox"));
    }

    get todoProjectList(){ return this._todoProjectList; }

    get todoProject(id){
        
    }

    addTodoProject(name){

    }

    deleteTodoProject(todoProjId){

    }

    renameTodoProject(todoProjId){

    }
}