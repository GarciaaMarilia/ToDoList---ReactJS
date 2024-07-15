import React, { useState } from "react";
import {
 Container,
 Row,
 Col,
 FormControl,
 Button,
 ListGroup,
} from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

import "./styles.css";

export default function ToDoList() {
 const [tasks, setTasks] = useState([]);
 const [taskInput, setTaskInput] = useState("");
 const [descriptionInput, setDescriptionInput] = useState("");
 const [checkedTasks, setCheckedTasks] = useState([]);

 function handleTaskInput(event) {
  let inputTask = event.target.value;
  setTaskInput(inputTask);
 }

 function handleDescriptionInput(event) {
  let inputDescription = event.target.value;
  setDescriptionInput(inputDescription);
 }

 function handleAddTask(event) {
  event.preventDefault();
  if (taskInput) {
   setTasks([...tasks, { task: taskInput, description: descriptionInput }]);
   setTaskInput("");
   setDescriptionInput("");
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

 return (
  <Container className="full-width full-height custom-padding bg-dark-custom d-flex flex-column">
   <Container className="text-center">
    <img
     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
     alt="Check"
     width="60"
    />
   </Container>
   <h1 className="text-center text-size-custom text-white py-4">Tasks</h1>
   <div className="input-container bg-dark-custom py-4 d-flex align-items-center h-100">
    <FormControl
     placeholder="Task"
     aria-label="Task"
     aria-describedby="basic-addon2"
     value={taskInput}
     onChange={handleTaskInput}
     className="me-2 bg-dark-custom text-white border-1"
    />
    <FormControl
     placeholder="Description"
     aria-label="Description"
     aria-describedby="basic-addon2"
     value={descriptionInput}
     onChange={handleDescriptionInput}
     className="me-1 bg-dark-custom text-white border-1 "
    />
    <Button
     variant="success"
     onClick={handleAddTask}
     className="d-flex align-items-center border-0"
    >
     Add
     <BsPlusCircle className="ms-2" size={20} />
    </Button>
   </div>
   <Row>
    <Col>
     <ListGroup>
      {tasks.length > 0 && (
       <h2 className="text-center fs-4 text-white">To Do</h2>
      )}
      {tasks.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center mb-2 bg-dark-custom text-white rounded"
       >
        <div>
         <div>{item.task}</div>
         <div className="text-white">{item.description}</div>
        </div>
        <Row>
         <Col>
          <Button variant="danger" onClick={() => handleRemoveTask(item)}>
           Delete
          </Button>
         </Col>
         <Col>
          <Button variant="success" onClick={() => handleCheckTask(item)}>
           Checked
          </Button>
         </Col>
        </Row>
       </ListGroup.Item>
      ))}
     </ListGroup>
    </Col>
    <Col>
     <ListGroup>
      {checkedTasks.length > 0 && (
       <h2 className="text-center fs-4 text-white">Checked</h2>
      )}
      {checkedTasks.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center mb-2 bg-dark-custom text-white rounded"
       >
        <div>
         <div>{item.task}</div>
         <div className="text-white">{item.description}</div>
        </div>
        <Button variant="danger" onClick={() => handleRemoveTask(item)}>
         Delete
        </Button>
       </ListGroup.Item>
      ))}
     </ListGroup>
    </Col>
   </Row>
  </Container>
 );
}
