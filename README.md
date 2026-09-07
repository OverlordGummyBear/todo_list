# Doer's To Do
A todo list app built with vanilla HTML, CSS, and JavaScript, bundled with Webpack and structured around a class-based domain model (projects, todo items, and filters) separated from the DOM rendering logic.

## Features
It is possible to
* Create, edit, and delete projects
* Create, edit, and delete tasks with a title, description, due date, and priority
* Mark tasks as completed
* Filter tasks by All, Today, Week, and Completed
* Persist all data locally using `localStorage`, so tasks and projects remain after refreshing

## Live Demo
Live Demo: https://overlordgummybear.github.io/todo_list/

## Getting Started
Clone the repo and install dependencies.
```bash
git clone https://github.com/OverlordGummyBear/todo_list.git
cd todo_list
npm install
```
Then start the development server:
```bash
npm run dev
```
Open `http://localhost:8080` in your browser.