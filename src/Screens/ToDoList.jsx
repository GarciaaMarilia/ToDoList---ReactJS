import React, { useState } from "react";
import {
 Container,
 Row,
 Col,
 FormControl,
 InputGroup,
 Button,
 ListGroup,
} from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

import "./styles.css";

export default function ToDoList() {
 const [tasks, setTasks] = useState([]);
 const [taskInput, setTaskInput] = useState("");
 const [checkedTasks, setCheckedTasks] = useState([]);

 function handleTask(event) {
  let inputTarefa = event.target.value;
  setTaskInput(inputTarefa);
 }

 function handleAddTask(event) {
  event.preventDefault();
  if (taskInput) {
   setTasks([...tasks, taskInput]);
   setTaskInput("");
  }
 }

 const handleRemoveTask = (taskToDelete) => {
  const updatedTasks = tasks.filter((item) => item !== taskToDelete);
  setTasks(updatedTasks);
 };

 const handleCheckTask = (taskInput) => {
  const checkedTasksAux = [...checkedTasks, taskInput];
  const updatedTasks = tasks.filter((item) => item !== taskInput);
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
   <h1 className="text-center text-size-custom text-white">Tasks</h1>
   <InputGroup className="mb-4">
    <FormControl
     placeholder="Task"
     aria-label="Atividade"
     aria-describedby="basic-addon2"
     value={taskInput}
     onChange={handleTask}
    />
    <Button
     variant="btn btn-outline-secondary"
     onClick={handleAddTask}
     className="bg-white border-0"
    >
     <BsPlusCircle size={30} className="dark-custom" />
    </Button>
   </InputGroup>
   <Row>
    <Col>
     <ListGroup>
      {tasks.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center mb-2"
       >
        {item}
        <Row>
         <Col>
          <Button
           variant="btn btn-danger"
           onClick={() => handleRemoveTask(item)}
          >
           Delete
          </Button>
         </Col>
         <Col>
          <Button
           variant="btn btn-success"
           onClick={() => handleCheckTask(item)}
          >
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
      {checkedTasks.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center mb-2"
       >
        {item}
        <Button variant="btn btn-danger" onClick={() => handleRemoveTask(item)}>
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
