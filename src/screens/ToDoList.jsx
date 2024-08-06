import React, { useState, useEffect } from "react";

import { BsPlusCircle } from "react-icons/bs";
import { Container, FormControl, Button } from "react-bootstrap";

import "./styles.css";
import Taskslist from "./components/taskList";
import TodayDate from "./components/todayDate";

const STORAGE_KEY_TASKS = "tasks";
const STORAGE_KEY_DATE = "lastResetDate";
const STORAGE_KEY_CHECKED_TASKS = "checkedTasks";

export default function ToDoList() {
 const [tasks, setTasks] = useState([]);
 const [taskInput, setTaskInput] = useState("");
 const [timeInput, setTimeInput] = useState("");
 const [checkedTasks, setCheckedTasks] = useState([]);
 const [descriptionInput, setDescriptionInput] = useState("");

 useEffect(() => {
  const lastResetDate = localStorage.getItem(STORAGE_KEY_DATE);
  const currentDate = new Date().toLocaleDateString();

  if (lastResetDate !== currentDate) {
   localStorage.clear();
   localStorage.setItem(STORAGE_KEY_DATE, currentDate);
  } else {
   const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY_TASKS));
   const savedCheckedTasks = JSON.parse(
    localStorage.getItem(STORAGE_KEY_CHECKED_TASKS)
   );
   if (savedTasks) setTasks(savedTasks);
   if (savedCheckedTasks) setCheckedTasks(savedCheckedTasks);
  }
 }, []);

 useEffect(() => {
  localStorage.setItem(STORAGE_KEY_TASKS, JSON.stringify(tasks));
 }, [tasks]);

 useEffect(() => {
  localStorage.setItem(STORAGE_KEY_CHECKED_TASKS, JSON.stringify(checkedTasks));
 }, [checkedTasks]);

 function handleTaskInput(event) {
  let inputTask = event.target.value;
  setTaskInput(inputTask);
 }

 function handleDescriptionInput(event) {
  let inputDescription = event.target.value;
  setDescriptionInput(inputDescription);
 }

 function handleTimeInput(event) {
  let inputTime = event.target.value;
  setTimeInput(inputTime);
 }

 function handleAddTask(event) {
  event.preventDefault();
  if (taskInput) {
   setTasks([
    ...tasks,
    { task: taskInput, description: descriptionInput, time: timeInput },
   ]);
   setTaskInput("");
   setDescriptionInput("");
   setTimeInput("");
  }
 }

 const handleRemoveTask = (taskToDelete) => {
  const updatedTasks = tasks.filter((item) => item !== taskToDelete);
  setTasks(updatedTasks);
  const checkedUpdatedTasks = checkedTasks.filter(
   (item) => item !== taskToDelete
  );
  setCheckedTasks(checkedUpdatedTasks);
 };

 const handleCheckTask = (taskToCheck) => {
  const checkedTasksAux = [...checkedTasks, taskToCheck];
  const updatedTasks = tasks.filter((item) => item !== taskToCheck);
  setTasks(updatedTasks);
  setCheckedTasks(checkedTasksAux);
 };

 const handleUndoCheckedTask = (taskToUndo) => {
  const tasksAux = [...tasks, taskToUndo];
  const updatedCheckedTasks = checkedTasks.filter(
   (item) => item !== taskToUndo
  );
  setTasks(tasksAux);
  setCheckedTasks(updatedCheckedTasks);
 };

 function handleTimeFocus(event) {
  if (event.target.value === "") {
   event.target.type = "time";
  }
 }

 function handleTimeBlur(event) {
  if (event.target.value === "") {
   event.target.type = "text";
  }
 }

 return (
  <Container className="full-width full-height custom-padding bg-white d-flex flex-column">
   <Container className="input-container py-4 d-flex align-items-center full-width">
    <FormControl
     required
     maxLength={30}
     aria-label="Task"
     value={taskInput}
     placeholder="Task"
     onChange={handleTaskInput}
     className="me-2  border-1"
     validationState="error"
     aria-describedby="basic-addon2"
    />
    <FormControl
     maxLength={30}
     aria-label="Description"
     value={descriptionInput}
     placeholder="Description"
     className="me-2  border-1 "
     aria-describedby="basic-addon2"
     onChange={handleDescriptionInput}
    />
    <FormControl
     type={timeInput ? "time" : "text"}
     aria-label="Time"
     value={timeInput}
     placeholder="Time"
     onChange={handleTimeInput}
     onFocus={handleTimeFocus}
     onBlur={handleTimeBlur}
     className="me-2  border-1"
     aria-describedby="basic-addon2"
    />
    <Button
     variant="success"
     onClick={handleAddTask}
     className="d-flex align-items-center border-0"
    >
     Add
     <BsPlusCircle className="ms-2" size={20} />
    </Button>
   </Container>

   <Container className="lists-container ">
    <TodayDate />

    <Taskslist
     type="todo"
     tasks={tasks}
     handleCheckTask={handleCheckTask}
     handleRemoveTask={handleRemoveTask}
    />

    <Taskslist
     type="done"
     tasks={checkedTasks}
     handleRemoveTask={handleRemoveTask}
     handleUndoCheckedTask={handleUndoCheckedTask}
    />
   </Container>
  </Container>
 );
}
