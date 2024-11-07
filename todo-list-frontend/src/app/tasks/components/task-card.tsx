import { Button, Checkbox, Group, Text } from "@mantine/core";
import { Task } from "../page";

type TaskCardProps = {
  task: Task;
  index: number;
  handleCheck: (index: number) => void;
  handleDelete: (index: number) => void;
};

export const TaskCard = ({
  task,
  index,
  handleCheck,
  handleDelete,
}: TaskCardProps) => {
  return (
    <Group>
      <Checkbox checked={task.done} onChange={() => handleCheck(index)} />
      <Text>
        {index}. {task.description}
      </Text>
      <Button onClick={() => handleDelete(index)} color="red" variant="outline">
        Eliminar
      </Button>
    </Group>
  );
};
