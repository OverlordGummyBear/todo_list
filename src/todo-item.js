let id = 0;

class TodoItem{
    _projectId;

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
    get projectId(){ return this._projectId; }

    set completed(isCompleted){ this._isCompleted = isCompleted; }
    set title(newTitle){ this._title = newTitle; }
    set description(newDescription){this._description = newDescription; }
    set dueDate(newDueDate){ this._dueDate = newDueDate; }
    set priority(newPriority){ this._priority = newPriority; }
    set projectId(newProjectId){this._projectId = newProjectId; }

    delete(){
        //call project remove item method
    }

    updateMethod(){

    }
}

export default TodoItem;