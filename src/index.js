import "./styles.css";
import TodoProject from "./todo-project.js";

const defaultTodo = new TodoProject("Default");
defaultTodo.addTodoItem("Anything", "This is anything you can think of", "some date", "high");
defaultTodo.addTodoItem("Anything", "This is anything you can think of", null , "high");

defaultTodo.deleteTodoItem("12");

console.log(defaultTodo);