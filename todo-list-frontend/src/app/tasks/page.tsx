"use client";
import { Button, Divider, Group, Stack, TextInput, Title } from "@mantine/core";
import { useState } from "react";
import { TaskCard } from "./components/task-card";

export type Task = {
  description: string;
  done: boolean;
};

export default function TasksPage() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = () => {
    if (task !== "") {
      setTasks([
        ...tasks,
        {
          description: task,
          done: false,
        },
      ]);
    }
  };

  const markTaskAsDone = (index: number) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        task.done = !task.done;
      }
      return task;
    });

    setTasks(newTasks);
  };

  const deleteTask = (index: number) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Stack style={{ width: "50%", padding: 20 }}>
      <Group gap="100px">
        <TextInput
          size="md"
          label="¿Cual es la siguiente tarea?"
          withAsterisk
          description="Ingresa la siguiente tarea que deseas realizar"
          placeholder="Describe brevemente la tarea"
          onChange={(event) => setTask(event.target.value)}
        />
        <Button onClick={addTask} color="blue" variant="outline">
          Guardar
        </Button>
      </Group>
      {task}
      <Title order={2}>Tareas {tasks?.length}: </Title>
      <Divider />
      <Stack>
        {tasks?.map((task, index) => (
          <TaskCard
            key={index}
            task={task}
            index={index}
            handleCheck={markTaskAsDone}
            handleDelete={deleteTask}
          />
        ))}
      </Stack>
    </Stack>
  );
}
