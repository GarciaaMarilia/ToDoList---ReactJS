import * as React from "react";
import { Container, TextField, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

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

  const handleRemoveTarefa = (tarefa) => {
    let novasTarefas = [...listaTarefas];
    novasTarefas.splice(listaTarefas.indexOf(tarefa), 1);
    setListaTarefas(novasTarefas);
  };

  return (
    <React.Fragment>
      <Typography
        variant="h4"
        sx={{ flexGrow: 1 }}
        align="center"
        fontSize="60px"
        marginTop="80px"
        color="#0A1929"
      >
        ToDoList
      </Typography>
      <Container style={{ maxWidth: "22%", marginTop: 60 }}>
        <TextField
          id="outlined-basic"
          label="Atividade"
          variant="outlined"
          type="text"
          value={tarefa}
          onChange={handleTarefa}
          style={{ marginTop: 8 }}
        />
        <IconButton onClick={handleAdicionarTarefa}>
          <AddCircleRoundedIcon
            sx={{
              fontSize: "46px",
              color: "#0A1929"
            }}
          />
        </IconButton>
        <ul>
          {listaTarefas.map((item) => (
            <li>
              {item}
              <IconButton>
                <DeleteIcon
                  onClick={() => {
                    handleRemoveTarefa(item);
                  }}
                  sx={{
                    color: "#0A1929"
                  }}
                />
              </IconButton>
            </li>
          ))}
        </ul>
      </Container>
    </React.Fragment>
  );
}
