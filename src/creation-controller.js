import TodoItem from "./todo-item.js";
import TodoProject from "./todo-project.js";

class CreationController{
    static createItem(projectId, title, description, dueDate, priority){
        //create item 
        //connect item to project using id (push it to project array) //project.addTodoItem(todoItem)
        //return item
        //item x = new item;
        //if(project.addtodoitem(item)) item.setProjectId(projectId)
    }

    static createProject(){
        //should project be able to be created with the same name? if not return false
    }
}

export default ItemController;