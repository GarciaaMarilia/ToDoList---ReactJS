import React from "react";
import { Container } from "@mui/material";
import ToDoList from "./Screens/ToDoList";

export default function App() {
  return (
    <Container style={{ backgroundColor: "#0A1929" }}>
      <ToDoList />
    </Container>
  );
}
