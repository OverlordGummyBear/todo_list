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
        this.projectDialog = document.querySelector("#project-dialog");
        this.taskDialog = document.querySelector("#task-dialog");
        //this.taskDialog.dataset.projectId = this.todoList.activeProject.getId();

        //Dialogs and forms
        //Open New Project Dialog without ID
        this.createProjectButton = document.querySelector(".create-project-button");
        this.createProjectButton.addEventListener("click", () => this.openProjectDialog());

        //Create or save project
        this.projectForm = document.querySelector(".project-creation-form");
        this.projectForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            this.saveProject();
        });

        //Open New Task Dialog without ID
        this.addTaskButton = document.querySelector(".add-task-button");
        this.addTaskButton.addEventListener("click", () => this.openTaskDialog());

        //Create or save task
        this.taskForm = document.querySelector(".task-creation-form");
        this.taskForm.addEventListener("submit", (event) => {
            event.preventDefault();

            this.saveTask();
        });

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

        this.todoList.activeProject.todoItemList.forEach((item) => {
            console.log(item);
        })
    }

    changeProjectView(projectId){
        this.todoList.activeProject = projectId;
        this.currentProjectH2.textContent = this.todoList.activeProject.name;

        //this.taskDialog.dataset.editingId = this.todoList.activeProject.getId();
    }

    openProjectDialog(projectId = null){
        const formh2 = document.querySelector(".project-form-H2");

        if(projectId){
            formh2.textContent = "Edit Project";
            const project = this.todoList.getTodoProject(projectId);
            this.projectForm.elements.projectName.value = project.name;
            this.projectDialog.dataset.editingId = projectId;
        } else {
            formh2.textContent = "New Project";
            this.projectForm.reset();
            delete this.projectDialog.dataset.editingId;
        }

        this.projectDialog.showModal();
    }

    saveProject(){
        const editingId = this.projectDialog.dataset.editingId;

        if(editingId)
            this.todoList.getTodoProject(editingId).name = projectName.value;
        else
            CreationController.createProject(this.todoList, projectName.value);

        delete this.projectDialog.dataset.editingId;
        this.projectDialog.close();
        this.updateScreen();
    }

    openTaskDialog(taskId = null){
        const formh2 = document.querySelector(".task-form-H2");

        if(taskId){
            formh2.textContent = "Edit Task";
        } else {
            formh2.textContent = "New Task"
            this.taskForm.reset();
            //delete this.dataset.dataset.editingId;
        }

        this.taskDialog.showModal();
    }

    saveTask(){
        //const editingId = this.taskDialog.dataset.editingId;

        //CreationController.createItem(this.todoList.getTodoProject(projectId.value), taskName.value, description.value, new Date(dueDate.value), priority.value)
    }
}

export default TodoViewer;