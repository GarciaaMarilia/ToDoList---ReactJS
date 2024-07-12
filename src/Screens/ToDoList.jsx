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

export default function ToDoList() {
 const [tarefa, setTarefa] = useState("");
 const [listaTarefas, setListaTarefas] = useState([]);
 const [checkedTasks, setCheckedTasks] = useState([]);

 function handleTarefa(event) {
  let inputTarefa = event.target.value;
  setTarefa(inputTarefa);
 }

 function handleAdicionarTarefa(event) {
  event.preventDefault();
  if (tarefa) {
   setListaTarefas([...listaTarefas, tarefa]);
   setTarefa("");
  }
 }

 const handleRemoveTarefa = (tarefa) => {
  let novasTarefas = [...listaTarefas];
  novasTarefas = novasTarefas.filter((item) => item !== tarefa);
  setListaTarefas(novasTarefas);
  setCheckedTasks(checkedTasks.filter((item) => item !== tarefa));
 };

 const handleCheckTarefa = (tarefa) => {
  const novasTarefas = [...checkedTasks, tarefa];
  setCheckedTasks(novasTarefas);
 };

 return (
  <Container
   style={{
    maxWidth: "100%",
    minHeight: "100vh",
    padding: "80px",
    backgroundColor: "#2c2c2c",
    flex: 1,
   }}
  >
   <Container style={{ textAlign: "center" }}>
    <img
     src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
     alt="Check"
     width="60"
    />
   </Container>
   <h1 className="text-center" style={{ fontSize: "60px", color: "#fff" }}>
    Tasks
   </h1>
   <InputGroup className="mb-3">
    <FormControl
     placeholder="Task"
     aria-label="Atividade"
     aria-describedby="basic-addon2"
     value={tarefa}
     onChange={handleTarefa}
    />
    <Button
     variant="btn btn-outline-secondary"
     onClick={handleAdicionarTarefa}
     style={{ backgroundColor: "#fff", border: "none" }}
    >
     <BsPlusCircle size={30} style={{ color: "#2c2c2c" }} />
    </Button>
   </InputGroup>
   <Row>
    <Col>
     <ListGroup>
      {listaTarefas.map((item, index) => (
       <ListGroup.Item
        key={index}
        className="d-flex justify-content-between align-items-center"
        style={{
         marginBottom: "10px",
        }}
       >
        {item}
        <Row>
         <Col>
          <Button
           variant="btn btn-danger"
           onClick={() => handleRemoveTarefa(item)}
          >
           Delete
          </Button>
         </Col>
         <Col>
          <Button
           variant="btn btn-success"
           onClick={() => handleCheckTarefa(item)}
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
        className="d-flex justify-content-between align-items-center"
        style={{
         marginBottom: "10px",
        }}
       >
        {item}
        <Button
         variant="btn btn-danger"
         onClick={() => handleRemoveTarefa(item)}
        >
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
