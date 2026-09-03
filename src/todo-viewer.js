import "./styles.css";
import TodoProject from "./todo-project.js";
import TodoList from "./todo-list.js";
import CreationController from "./creation-controller.js";

import TrashCan from "./img/trashcan.svg";
import NoteEdit from "./img/note-edit.svg";

import { format, compareAsc, isToday } from "date-fns";
import {filterToday, filterByCompletion, filterOverdue} from "./filter.js";
import {sortByPriority, sortByDate} from "./sort.js";

class TodoViewer{
    constructor(){
        this.todoList = new TodoList();

        this.updateScreen();
    }

    updateScreen(){
        //Render all created projects
        const projectDiv = document.querySelector(".projects");
        projectDiv.textContent = "";

        this.todoList.todoProjectList.forEach(project => {
            //Project div container
            const projectCardDiv = document.createElement("div");
            projectCardDiv.classList = "project-card";
            projectCardDiv.dataset.projectId = project.getId();

            //Project-card button
            const projectButton = document.createElement("button");
            projectButton.textContent = project.name;

            if(project.name !== "Inbox"){ 
                //Edit/Delete div
                const changeProjectButtonDiv = document.createElement("div");
                changeProjectButtonDiv.classList = "project-buttons-container";

                const projectEditButton = document.createElement("button");
                const editSVG = document.createElement("img");
                editSVG.src = NoteEdit;
                editSVG.alt = "Project Edit button";
                projectEditButton.appendChild(editSVG);

                const projectDeleteButton = document.createElement("button");
                const deleteSVG = document.createElement("img");
                deleteSVG.src = TrashCan;
                deleteSVG.alt = "Project Delete button";
                projectDeleteButton.appendChild(deleteSVG);

                //Append elements
                changeProjectButtonDiv.append(projectEditButton, projectDeleteButton);
                projectCardDiv.append(projectButton, changeProjectButtonDiv);
            } else{
                projectCardDiv.appendChild(projectButton)
            }

            

            projectDiv.appendChild(projectCardDiv);
        });
    }
}

export default TodoViewer;