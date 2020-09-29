"use strict";
const input = require("readline-sync");

const mainOptions = [`C-add new task`,`R-show my tasks`,`U-update task status`,`D-delete a task`,];
const todoList = [
  {task: `buy milk`,markAsDone: `no`,},
  {task: `feed cat`,markAsDone: `no`,},
];

const newTast = () => {
  let newToDo = input.question(`Enter your mission : `);
  todoList.push({ task: newToDo, markAsDone: `no` });
  console.log(todoList);
};

const isComplete = () => {
  const taskArray = [];
  todoList.map((todo) => {
    taskArray.push(todo.task);
  });
  const question = taskArray;
  const index = input.keyInSelect(question, "Which task to reverse status?");
  if (index === -1) {
    return `thank you , Good bye`;
  } else if (todoList[index].markAsDone === `yes`) {
    todoList[index].markAsDone = `no`;
  } else if (todoList[index].markAsDone === `no`) {
    todoList[index].markAsDone = `yes`;
  }
  console.log(todoList);
};

const deleteTask = () => {
  const taskArray = [];
  todoList.map((todo) => {
    taskArray.push(todo.task);
  });
  const question = taskArray;
  const index = input.keyInSelect(question, "Which Task you to remove?");
  todoList.splice(index, 1);

  console.log(todoList);
};

const showToDoList = () => {
  console.log(todoList);
};

const initList = () => {
  const index = input.keyInSelect(mainOptions,`What do you want to do with the list?`);

  if (index === -1) console.log(`thank you , Good bye`);
  if (index === 0) newTast();
  if (index === 1) showToDoList();
  if (index === 2) isComplete();
  if (index === 3) deleteTask();
};

initList();
