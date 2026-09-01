import TodoProject from "./todo-project";

class TodoList{
    todoProjectList = [];
    
    constructor(){
        const defaultTodoProject = new TodoProject("Inbox");

        this.activeProject = defaultTodoProject;
        this.defaultId = defaultTodoProject.id;
        this.todoProjectList.push(defaultTodoProject);
    }

    get todoProjectList(){ return this._todoProjectList; }

    get todoProject(id){
        return this._todoProjectList.find((project) => project.id === id);
    }

    setActiveProject(id){
        const project = this.todoProjectList.find((project) => project.id = id);

        if(project === undefined) return;

        this.activeProject = project;
    }

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
        if(this.todoProjectList[projectIndex] == this.activeProject){
            this.activeProject = this.todoProjectList.find(project => project.id === this._defaultProjectId);
        }

        this.todoProjectList.splice(projectIndex, 1);
    }

    addTodoItemToProject(projectId, title, description, dueDate, priority){
        const todoProject = this._todoProjectList.find((project) => project.id === projectId);

        if(todoProject === undefined){
            defaultTodoProject.addTodoItem(title, description, dueDate, priority);
            return;
        }

        todoProject.addTodoItem(title, description, dueDate, priority);
    }
}

export default TodoList;