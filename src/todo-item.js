//let id = 0;

class TodoItem{    
    constructor(title, description, dueDate, priority){
        this.id = crypto.randomUUID(); //id++;//
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

    set completed(isCompleted){ this._isCompleted = isCompleted; }
    set title(newTitle){ this._title = newTitle; }
    set description(newDescription){this._description = newDescription; }
    set dueDate(newDueDate){ this._dueDate = newDueDate; }
    set priority(newPriority){ this._priority = newPriority; }
}

export default TodoItem;