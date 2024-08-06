import React from "react";

import { LuUndo2 } from "react-icons/lu";
import { Button, Container, ListGroup } from "react-bootstrap";
import { BsCheckCircleFill, BsClock, BsFillTrashFill } from "react-icons/bs";

export default function Taskslist({
 type,
 tasks,
 handleCheckTask,
 handleRemoveTask,
 handleUndoCheckedTask,
}) {
 return (
  <ListGroup className="mb-4">
   <h2 className="fs-6">
    <strong>{type === "todo" ? "To Do" : "Done"}</strong>
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

       {type === "todo" ? (
        <Button variant="success" onClick={() => handleCheckTask(item)}>
         <BsCheckCircleFill size={16} />
        </Button>
       ) : (
        <Button
         variant="btn btn-warning"
         onClick={() => handleUndoCheckedTask(item)}
        >
         <LuUndo2 size={16} />
        </Button>
       )}
      </Container>
     </ListGroup.Item>
    ))
   ) : (
    <p className="centered-gray-text">
     {type === "todo"
      ? "You don't have any tasks to do yet. "
      : "You don't have any tasks done yet."}
    </p>
   )}
  </ListGroup>
 );
}
