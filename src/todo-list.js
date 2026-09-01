import TodoProject from "./todo-project.js";

class TodoList{
    _todoProjectList = [];
    
    constructor(){
        const defaultTodoProject = new TodoProject("Inbox");

        this.defaultId = defaultTodoProject.id;
        this.todoProjectList.push(defaultTodoProject);
        this.activeProject = this.defaultId;
    }

    get todoProjectList(){ return this._todoProjectList; }

    getTodoProject(id){
        return this._todoProjectList.find((project) => project.id === id);
    }

    get activeProject(){ return this._activeProject; }

    set activeProject(id){
        const project = this._todoProjectList.find((project) => project.id === id);

        if (project === undefined) return;
        
        this._activeProject = project;
    }

    addTodoProject(name){
        this.todoProjectList.push(new TodoProject(name));
    }

    renameTodoProject(todoProjId, newName){
        const project = this.todoProjectList.find((project) => project.id === todoProjId);

        if(project === undefined) return;

        project.name = newName;
    }

    deleteTodoProject(todoProjId){
        const projectIndex = this._todoProjectList.findIndex((project) => project.id === todoProjId);

        if(projectIndex === -1) return;
        if(this.todoProjectList[projectIndex] === this.activeProject){
            this.activeProject = this.defaultId;
        }
        if(this.defaultId === todoProjId) return; //not allowing the user to delete the default project

        this._todoProjectList.splice(projectIndex, 1);
    }

    addTodoItemToProject(projectId, title, description, dueDate, priority){
        const todoProject = this._todoProjectList.find((project) => project.id === projectId);

        if(todoProject === undefined){ 
            this.getTodoProject(this.defaultId).addTodoItem(title, description, dueDate, priority);
            return;
        }

        todoProject.addTodoItem(title, description, dueDate, priority);
    }
}

export default TodoList;