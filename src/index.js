import "./styles.css";
import TodoProject from "./todo-project.js";
import TodoList from "./todo-list.js";
import CreationController from "./creation-controller.js"
import TodoViewer from "./todo-viewer.js";

import { format, compareAsc, isToday } from "date-fns";
import {filterToday, filterByCompletion, filterOverdue} from "./filter.js";
import {sortByPriority, sortByDate} from "./sort.js";

/* 
const defaultTodo = new TodoProject("Default");

CreationController.createItem(defaultTodo, "First title", "none", new Date(2026, 7, 2), 1)
CreationController.createItem(defaultTodo, "Second title", "none", new Date(2026, 7, 10), 2)
CreationController.createItem(defaultTodo, "Third title", "none", new Date(2026, 8, 2), 3)
CreationController.createItem(defaultTodo, "Fourth title", "none", new Date(2026, 9, 1), 4)
CreationController.createItem(defaultTodo, "Fifth title", "none", new Date(2026, 11, 12), 2)

defaultTodo.getTodoItem(1).isCompleted = true;
defaultTodo.getTodoItem(2).isCompleted = true;
defaultTodo.getTodoItem(4).isCompleted = true;

console.log(filterByCompletion(defaultTodo.todoItemList, false));
*/