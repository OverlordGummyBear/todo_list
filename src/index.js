import "./styles.css";
import TodoProject from "./todo-project.js";
import TodoList from "./todo-list.js";

const defaultTodo = new TodoProject("Default");
defaultTodo.addTodoItem("Number 0", "This is anything", "some date", "high");
defaultTodo.addTodoItem("Number 1", "you can think of", null , "high");

//console.log("Log todo item from id")
//console.log(defaultTodo.getTodoItem(1));

console.log("Log todoProject")
console.log(defaultTodo.todoItemList);

console.log("Log item with id 1");
console.log(defaultTodo.getTodoItem(1));

console.log("Delete item with id 1");
defaultTodo.deleteTodoItem(1);
console.log(defaultTodo.todoItemList);

