import { format, compareAsc, isToday, isPast, isWithinInterval, startOfToday, addDays, endOfDay } from "date-fns";

function filterToday(todoItemArray){
    return todoItemArray.filter((item) => isToday(item.dueDate));
}

function filterWeek(todoItemArray){    
    return todoItemArray.filter((item) => 
        isWithinInterval(new Date(item.dueDate), {
        start: startOfToday(),
        end: endOfDay(addDays(new Date(), 7))
    }));
}

function filterByCompletion(todoItemArray, isCompleted){
    return todoItemArray.filter((item) => item.isCompleted === isCompleted);
}

function filterOverdue(todoItemArray){
    return todoItemArray.filter((item) => 
        isPast(item.dueDate) && 
        !item.isCompleted &&
        !isToday(item.dueDate));
}

export {filterToday, filterWeek, filterByCompletion, filterOverdue};