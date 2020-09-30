"use strict";
const input = require("readline-sync");

const todoList = [
  {task: `buy milk`,markAsDone: `no`,},
  {task: `feed cat`,markAsDone: `no`,},
];
const newTask = (task) =>{
  if(!task) return todoList;
  todoList.push({task : task , markAsDone : `no`})
  return todoList;
} 
const getTaskFromUser = () => {
  let newToDo = input.question(`Enter your mission : `);
  return newTask(newToDo);
   
  // console.log(todoList);
  // initList();
};

const findTaskToChangeStatus = () =>{
  const taskArray = [];
  todoList.map((todo) => {
    taskArray.push(todo.task);
  });
  const question = taskArray;
  const index = input.keyInSelect(question, "Which task to reverse status?");
 isComplete(index);
}


const isComplete = (index) => {
  if (index === -1) {
    return `thank you , Good bye`;
  } else if (todoList[index].markAsDone === `yes`) {
    todoList[index].markAsDone = `no`;
  } else if (todoList[index].markAsDone === `no`) {
    todoList[index].markAsDone = `yes`;
  }
  // console.log(todoList);
  // initList();
};

const deleteTask = () => {
  const taskArray = [];
  todoList.map((todo) => {
    taskArray.push(todo.task);
  });
  const question = taskArray;
  const index = input.keyInSelect(question, "Which Task you to remove?");
  todoList.splice(index, 1);

  // console.log(todoList);
  // initList();
};

const showToDoList = () => {
  console.log(todoList);
  // initList();
};

const initList = () => {
  const mainOptions = [`C-add new task`,`R-show my tasks`,`U-update task status`,`D-delete a task`,];
  const index = input.keyInSelect(mainOptions,`What do you want to do with the list?`);

  if (index === -1) console.log(`thank you , Good bye`);
  if (index === 0) getTaskFromUser();
  if (index === 1) showToDoList();
  if (index === 2) findTaskToChangeStatus();
  if (index === 3) deleteTask();
};

// initList();

module.exports = {
  newTask,
  initList,
  getTaskFromUser,
  showToDoList,
  isComplete,
  deleteTask,
  todoList,
};