import { Button, Card, Flex, Tag } from "antd";
import type { Task, TaskPriority, TaskStatus } from "../entities/Task";

type TaskCardProps = {
    task: Task;
};

const getActionText = (status: TaskStatus) => {
    const actionsTexts = {
        "todo": "Iniciar",
        "doing": "Concluir",
        "done": "Arquivar",
    }
    return actionsTexts[status]
}

const getActionColor = (status: TaskStatus) => {
    const priorityColors: { [key: string]: "blue" | "green" | "gold" } = {
        "todo": "blue",
        "doing": "green",
        "done": "gold",
    }
    return priorityColors[status]
}

const getPriorityColor = (priority: TaskPriority) => {
    const priorityColors: { [key: string]: "geekblue" | "yellow" | "red" } = {
        "low": "geekblue",
        "medium": "yellow",
        "high": "red",
    }
    return priorityColors[priority]
}
const getPriorityText = (priority: TaskPriority) => {
    const priorityColors: { [key: string]: "Baixa" | "Média" | "Alta" } = {
        "low": "Baixa",
        "medium": "Média",
        "high": "Alta",
    }
    return priorityColors[priority]
}

export default function TaskCard({ task }: TaskCardProps) {
    return (
        <Card
            title={task.title}
            size="small"
            type="inner"
        >
            <p className="text-sm mb-2">{task.description}</p>

            <Tag color={getPriorityColor(task.priority)}>
                Prioridade: {getPriorityText(task.priority).toUpperCase()}
            </Tag>

            <Flex gap={"small"} justify={"flex-end"}>
                {task.status !== "done" && (
                    <Button color={getActionColor(task.status)} variant="solid">
                        {getActionText(task.status)}
                    </Button>
                )}
                <Button className="delete-button">Excluir</Button>
            </Flex>
        </Card>
    );
}
