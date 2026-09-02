import { format, compareAsc, isToday, isPast } from "date-fns";

function filterToday(todoItemArray){
    return todoItemArray.filter((item) => isToday(item.dueDate));
}

function filterByCompletion(todoItemArray, isCompleted){
    return todoItemArray.filter((item) => item.isCompleted === isCompleted);
}

function filterOverdue(todoItemArray){
    return todoItemArray.filter((item) => isPast(item.dueDate) && !item.isCompleted);
}

export {filterToday, filterByCompletion, filterOverdue};