import { format, compareAsc, isToday } from "date-fns";

function sortByPriority(todoItemArray){
    return [...todoItemArray].sort((a, b) => a.priority - b.priority);
}

function sortByDate(todoItemArray){
    return [...todoItemArray].sort((a,b) => compareAsc(a.dueDate, b.dueDate));
}

export {sortByPriority, sortByDate};