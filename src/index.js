import "./styles.css";
import TodoViewer from "./todo-viewer.js";
import TodoList from "./todo-list.js";

const todoList = TodoList.load();

new TodoViewer(todoList);