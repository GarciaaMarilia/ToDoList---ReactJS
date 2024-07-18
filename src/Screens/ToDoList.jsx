import React, { useState } from "react";
import { Container, FormControl, Button, ListGroup } from "react-bootstrap";
import {
 BsPlusCircle,
 BsFillTrashFill,
 BsCheckCircleFill,
 BsClock,
} from "react-icons/bs";
import { LuUndo2 } from "react-icons/lu";

import "./styles.css";

export default function ToDoList() {
 const [tasks, setTasks] = useState([]);
 const [taskInput, setTaskInput] = useState("");
 const [descriptionInput, setDescriptionInput] = useState("");
 const [checkedTasks, setCheckedTasks] = useState([]);
 const [timeInput, setTimeInput] = useState("");

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
     type="time"
     aria-label="Time"
     value={timeInput}
     placeholder="Time"
     onChange={handleTimeInput}
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
    <h2 className="mb-4 font-bold text-size-custom">
     <strong>Today</strong>
    </h2>
    <ListGroup className="mb-4">
     <h2 className="fs-6">
      <strong>To Do</strong>
     </h2>

     {tasks.length > 0 ? (
      tasks.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center mb-2  rounded border"
       >
        <Container className="px-0">
         {item.task}
         <br />
         {item.description}

         <div className="d-flex align-items-center text-secondary">
          {item.time}
          <BsClock size={15} className="ms-2" />
         </div>
        </Container>

        <Container className="d-flex w-auto px-0">
         <Button
          className="me-2"
          variant="danger"
          onClick={() => handleRemoveTask(item)}
         >
          <BsFillTrashFill size={16} />
         </Button>

         <Button variant="success" onClick={() => handleCheckTask(item)}>
          <BsCheckCircleFill size={16} />
         </Button>
        </Container>
       </ListGroup.Item>
      ))
     ) : (
      <p className="centered-gray-text">You don't have any tasks to do yet.</p>
     )}
    </ListGroup>

    <ListGroup>
     <h2 className="fs-6">
      <strong>Done</strong>
     </h2>

     {checkedTasks.length > 0 ? (
      checkedTasks.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center mb-2  rounded border"
       >
        <Container className="px-0">
         {item.task}
         <br />
         {item.description}

         <div className="d-flex align-items-center text-secondary">
          {item.time}
          <BsClock size={15} className="ms-2" />
         </div>
        </Container>

        <Container className="d-flex w-auto px-0">
         <Button
          className="me-2"
          variant="danger"
          onClick={() => handleRemoveTask(item)}
         >
          <BsFillTrashFill size={16} />
         </Button>
         <Button
          variant="btn btn-warning"
          onClick={() => handleUndoCheckedTask(item)}
         >
          <LuUndo2 size={16} />
         </Button>
        </Container>
       </ListGroup.Item>
      ))
     ) : (
      <p className="centered-gray-text">You don't have any tasks done yet.</p>
     )}
    </ListGroup>
   </Container>
  </Container>
 );
}
