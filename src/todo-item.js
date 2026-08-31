class TodoItem{
    constructor(title, description, dueDate, priority){
        this.id = crypto.randomUUID();
        this.completed = false;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    get completed(){ return this.completed; }
    get title(){ return this.title; }
    get description(){ return this.description; }
    get dueDate(){ return this.dueDate; }
    get priority(){ return this.priority; }

    set completed(isCompleted){ this.completed = isCompleted; }
    set title(newTitle){ this.title = newTitle; }
    set description(newDescription){this.description = newDescription; }
    set dueDate(newDueDate){ this.dueDate = newDueDate; }
    set priority(newPriority){ this.priority = newPriority; }
}

export default TodoItem;