import TodoProject from "./todo-project.js";

let id = 0;

class TodoItem{
    _project;

    constructor(title, description, dueDate, priority){
        this.id = id++;//crypto.randomUUID(); //
        this.completed = false;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get completed(){ return this._completed; }
    get title(){ return this._title; }
    get description(){ return this._description; }
    get dueDate(){ return this._dueDate; }
    get priority(){ return this._priority; }
    get project(){ return this._project; }

    set completed(isCompleted){ this._isCompleted = isCompleted; }
    set title(newTitle){ this._title = newTitle; }
    set description(newDescription){this._description = newDescription; }
    set dueDate(newDueDate){ this._dueDate = newDueDate; }
    set priority(newPriority){ this._priority = newPriority; }
    set project(newProjectRef){this._project = newProjectRef; }

    delete(){
        return this._project.removeTodoItem(this._id);
    }

    update(project, title, description, dueDate, priority){
        this.title = title !== undefined ? title : this._title;
        this.description = description !== undefined ? description : this._description;
        this.dueDate = dueDate !== undefined ? dueDate : this._dueDate;
        this.priority = priority !== undefined ? priority : this._priority;

        if(project !== this._project) this.moveToProject(project);
    }

    moveToProject(newProject){
        const oldProject = this._project;
        if(newProject.addTodoItem(this)){
            oldProject.removeTodoItem(this._id);
            this._project = newProject;
        }
    }
}

export default TodoItem;