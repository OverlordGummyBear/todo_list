import CreationController from "./creation-controller.js";
import TodoProject from "./todo-project.js";
import { format, startOfToday, endOfDay, addDays } from "date-fns";

class TodoList{
    _todoProjectList = [];
    
    constructor(){
        const defaultTodoProject = new TodoProject("Inbox");
        const secondTodoProject = new TodoProject("Second Todo");

        //Items to show app functionality
        CreationController.createItem(defaultTodoProject, "Task for today", "A task for today", format(new Date(startOfToday()), "yyyy-MM-dd") , 3);
        CreationController.createItem(secondTodoProject, "Task for 7 days hence", "Task for 7 days later", endOfDay(addDays(new Date(), 7)), 2);
        CreationController.createItem(defaultTodoProject, "First Task!", "This is the description for the first task", "2026-02-01", 1);
        CreationController.createItem(secondTodoProject, "Task with no Priority", "This task does not have a priority", "", 4);
        CreationController.createItem(secondTodoProject, "Another task for today", "", format(new Date(startOfToday()), "yyyy-MM-dd"), 2);
        CreationController.createItem(defaultTodoProject, "This is another overdue task", "", "2026-06-07", 4);
        CreationController.createItem(defaultTodoProject, "Task for middle of the week", "Another task in the middle of the week", endOfDay(addDays(new Date(), 4)), 1);

        this.defaultId = defaultTodoProject.id;
        this.todoProjectList.push(defaultTodoProject);
        this.activeProject = this.defaultId;

        this.todoProjectList.push(secondTodoProject);
    }

    get todoProjectList(){ return this._todoProjectList; }

    getAllTodoItems(){
        let allTodoItems = [];

        this.todoProjectList.forEach(project => {
            allTodoItems = [...allTodoItems, ...project.todoItemList];
        });

        return allTodoItems;
    }

    getTodoProject(id){
        return this._todoProjectList.find((project) => project.getId() === id);
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

    save(){
        const data = this.todoProjectList.map(project => project.toSaveFormat());
        localStorage.setItem("todoList", JSON.stringify(data));
    }

    static load(){
        const stored = localStorage.getItem("todoList");
        if(!stored) return new TodoList();

        const data = JSON.parse(stored);
        const list = Object.create(TodoList.prototype);
        list._todoProjectList = data.map(projectData =>
            TodoProject.fromSaveFormat(projectData)
        );

        list.defaultId = list._todoProjectList[0].id;
        list.activeProject = list.defaultId;

        return list;
    }
}

export default TodoList;