import TodoItem from "./todo-item.js";
import TodoProject from "./todo-project.js";
import ProjectList from "./todo-list.js";

class CreationController{
    static createItem(project, title, description, dueDate, priority){
        const todoItem = new TodoItem(title, description, dueDate, priority);

        if(project.addTodoItem(todoItem))
            return todoItem;
    }

    static createProject(todoList, name){
        const project = new TodoProject(name);

        if (!todoList.addTodoProject(project)) return;

        return project;
    }
}

export default CreationController;