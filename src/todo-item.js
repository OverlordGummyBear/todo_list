import TodoProject from "./todo-project.js";

class TodoItem{
    _project;

    constructor(title, description, dueDate, priority){
        this.id = crypto.randomUUID();
        this.isCompleted = false;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getId(){ return this.id };
    get isCompleted(){ return this._isCompleted; }
    get title(){ return this._title; }
    get description(){ return this._description; }
    get dueDate(){ return this._dueDate; }
    get priority(){ return this._priority; }
    get project(){ return this._project; }

    setId(id){ this.id = id; }
    set isCompleted(isComplete){ this._isCompleted = isComplete; }
    set title(newTitle){ this._title = newTitle; }
    set description(newDescription){this._description = newDescription; }
    set dueDate(newDueDate){ this._dueDate = newDueDate; }
    set priority(newPriority){ this._priority = newPriority; }
    set project(newProjectRef){this._project = newProjectRef; }

    delete(){
        return this._project.removeTodoItem(this.getId());
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
            oldProject.removeTodoItem(this.getId());
            this._project = newProject;
        }
    }

    toSaveFormat(){
        return{
            id: this.getId(),
            title: this.title,
            description: this.description,
            dueDate: this.dueDate,
            priority: this.priority,
            isCompleted: this.isCompleted,
        }
    }

    static fromSaveFormat(data, project){
        const item = new TodoItem(data.title, data.description, data.dueDate, data.priority);
        item.setId(data.id);
        item.isCompleted = data.isCompleted;
        item._project = project;
        return item;
    }
}

export default TodoItem;