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
        this.projectDiv = document.querySelector(".projects");
        this.currentProjectH2 = document.querySelector(".current-project-header");

        //Dialogs and forms
        this.projectDialog = document.querySelector("#project-dialog");

        this.projectForm = document.querySelector(".project-creation-form");
        this.projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const editingId = this.projectDialog.dataset.editingId;

            if(editingId)
                this.todoList.getTodoProject(editingId).name = projectName.value;
            else
                CreationController.createProject(this.todoList, projectName.value);

            this.projectDialog.close();
            this.updateScreen();
        })

        this.updateScreen();
    }

    updateScreen(){
        //Render all created projects
        this.projectDiv.textContent = "";
        this.currentProjectH2.textContent = this.todoList.activeProject.name; //make sure it  can also show the filters e.g. all, today, week, completed

        this.todoList.todoProjectList.forEach(project => {
            //Project div container
            const projectCardDiv = document.createElement("div");
            projectCardDiv.classList = "project-card";
            projectCardDiv.dataset.projectId = project.getId();

            //Project-card button
            const projectButton = document.createElement("button");
            projectButton.textContent = project.name;

            projectButton.addEventListener("click", () => this.changeProjectView(project.getId()));

            if(project.name !== "Inbox"){ 
                //Edit/Delete div
                const changeProjectButtonDiv = document.createElement("div");
                changeProjectButtonDiv.classList = "project-buttons-container";

                const projectEditButton = document.createElement("button");
                const editSVG = document.createElement("img");
                editSVG.src = NoteEdit;
                editSVG.alt = "Project Edit button";
                projectEditButton.appendChild(editSVG);

                projectEditButton.addEventListener("click", () => this.openProjectDialog(project.getId()))

                const projectDeleteButton = document.createElement("button");
                const deleteSVG = document.createElement("img");
                deleteSVG.src = TrashCan;
                deleteSVG.alt = "Project Delete button";
                projectDeleteButton.appendChild(deleteSVG);

                projectDeleteButton.addEventListener("click", () => {
                    this.todoList.removeTodoProject(project.getId());
                    this.updateScreen();
                })

                //Append elements
                changeProjectButtonDiv.append(projectEditButton, projectDeleteButton);
                projectCardDiv.append(projectButton, changeProjectButtonDiv);
            } else{
                projectCardDiv.appendChild(projectButton)
            }

            this.projectDiv.appendChild(projectCardDiv);
        });
    }

    changeProjectView(projectId){
        this.todoList.activeProject = projectId;
        this.currentProjectH2.textContent = this.todoList.activeProject.name;
    }

    openProjectDialog(projectId = null){
        if(projectId){
            const project = this.todoList.getTodoProject(projectId);
            this.projectForm.elements.projectName.value = project.name;
            this.projectDialog.dataset.editingId = projectId;
        } else {
            this.projectForm.reset();
            delete dialog.dataset.editingId;
        }

        this.projectDialog.showModal();
    }
}

export default TodoViewer;