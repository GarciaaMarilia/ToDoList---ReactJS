import * as React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export default function ToDoList() {
  const [tarefa, setTarefa] = React.useState("");
  const [listaTarefas, setListaTarefas] = React.useState([]);

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

  return (
    <Container>
      <Typography
        variant="h4"
        sx={{ flexGrow: 1 }}
        align="center"
        fontFamily="Oswald"
        color="#fff"
        fontSize="60px"
        marginTop="80px"
      >
        ToDoList
      </Typography>
      <Box
        sx={{
          width: 300,
          height: 500,
          border: "1px grey",
          p: 2,
          borderRadius: 6,
          backgroundColor: "#fff"
        }}
      >
        <TextField
          id="outlined-basic"
          label="Atividade"
          variant="outlined"
          type="text"
          value={tarefa}
          fullWidth
          onChange={handleTarefa}
          style={{ marginTop: 10 }}
        />
        <Button
          variant="contained"
          type="submit"
          onClick={handleAdicionarTarefa}
        >
          Salvar
        </Button>
        <ul>
          {listaTarefas.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </Box>
    </Container>
  );
}
