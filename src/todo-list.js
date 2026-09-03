import TodoProject from "./todo-project.js";

class TodoList{
    _todoProjectList = [];
    
    constructor(){
        const defaultTodoProject = new TodoProject("Inbox");
        const secondTodoProject = new TodoProject("Secondly"); //remove later

        this.defaultId = defaultTodoProject.id;
        this.todoProjectList.push(defaultTodoProject);
        this.activeProject = this.defaultId;

        this.todoProjectList.push(secondTodoProject); //remove later
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

    addTodoProject(project){
        //make sure that projects cannot have the same name
        if(this._todoProjectList.find((proj) => proj.name === project.name)) return false;
        
        this.todoProjectList.push(project);

        return true;
    }

    removeTodoProject(todoProjectId){
        if(this.defaultId === todoProjectId) return false; //not allowing the user to delete the default project
        
        const projectIndex = this._todoProjectList.findIndex((project) => project.id === todoProjectId);

        if(projectIndex === -1) return false;
        if(this._todoProjectList[projectIndex] === this.activeProject){
            this.activeProject = this.defaultId;
        }

        this._todoProjectList.splice(projectIndex, 1);
        return true;
    }
}

export default TodoList;