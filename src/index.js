import "./styles.css";
import TodoProject from "./todo-project.js";

const defaultTodo = new TodoProject("Default");
defaultTodo.addTodoItem("Anything", "This is anything you can think of", "some date", "high");
defaultTodo.addTodoItem("Other", "This is anything you can think of", null , "high");

//defaultTodo.updateTodoItem(1);

console.log("Log todo item from id")
console.log(defaultTodo.getTodoItem(1));

console.log("Log todoProject")
console.log(defaultTodo);