import TodoProject from "./todo-project";

class TodoList{
    todoProjectList = [];
    
    constructor(){
        const defaultTodoProject = new TodoProject("Inbox");

        this.todoProjectList.push(defaultTodoProject);
        this.activeProject = defaultTodoProject;
    }

    get todoProjectList(){ return this._todoProjectList; }

    get todoProject(id){
        return this._todoProjectList.find((project) => project.id === id);
    }

    setActiveProject(todoProject){ this._activeProject = todoProject; }

    addTodoProject(name){
        this._todoProjectList.push(new TodoProject(name));
    }

    renameTodoProject(todoProjId, newName){
        const project = this.todoProjectList.find((project) => project.id === todoProjId);

        if(project === undefined) return;

        project.name = newName;
    }

    deleteTodoProject(todoProjId){
        const projectIndex = this.todoProjectList.findIndex((project) => project.id === todoProjId);

        if(projectIndex === -1) return;

        this.todoProjectList.splice(projectIndex, 1);
    }
}