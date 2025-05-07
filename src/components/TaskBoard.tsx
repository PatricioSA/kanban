import { Badge, Col, Row } from "antd";
import type { Task } from "../entities/Task";

export default function TaskBoard() {
  const tasks: Task[] = [
    {
      "id": "1",
      "title": "Responder emails pendentes",
      "description": "Verificar e responder emails importantes da caixa de entrada.",
      "status": "doing",
      "priority": "high"
    },
    {
      "id": "2",
      "title": "Criar apresentação",
      "description": "Preparar os slides para a reunião com os investidores.",
      "status": "todo",
      "priority": "high"
    },
    {
      "id": "3",
      "title": "Backup do sistema",
      "description": "Realizar backup dos arquivos e banco de dados do sistema.",
      "status": "done",
      "priority": "medium"
    },
    {
      "id": "4",
      "title": "Pesquisa de mercado",
      "description": "Coletar dados sobre a concorrência e tendências do mercado.",
      "status": "todo",
      "priority": "low"
    },
    {
      "id": "5",
      "title": "Otimizar banco de dados",
      "description": "Melhorar a performance das consultas otimizando índices e tabelas.",
      "status": "doing",
      "priority": "medium"
    },
    {
      "id": "6",
      "title": "Atualizar documentação",
      "description": "Revisar e atualizar a documentação do projeto.",
      "status": "todo",
      "priority": "low"
    }
  ]

  const tasksTodo = tasks.filter(task => task.status === "todo")
  const tasksDoing = tasks.filter(task => task.status === "doing")
  const tasksDone = tasks.filter(task => task.status === "done")

  return (
    <Row className="w-full min-h-screen p-4">
      <Col xs={24} sm={12} md={8} className="px-2">
        <div className="flex items-center text-lg font-semibold p-2 mb-4 gap-2 bg-gray-300 rounded-sm">
          <span>A Fazer</span>
          <Badge color="blue" count={tasksTodo.length} showZero className="text-xl" />
        </div>
        {tasksTodo.map((task) => <div>{task.title}</div>)}
      </Col>

      <Col xs={24} sm={12} md={8} className="px-2">
        <div className="flex items-center text-lg font-semibold p-2 mb-4 gap-2 bg-yellow-200 rounded-sm">
          <span>Em Progresso</span>
          <Badge color="yellow" count={tasksDoing.length} showZero className="text-xl" />
        </div>
        {tasksDoing.map((task) => <div>{task.title}</div>)}
      </Col>

      <Col xs={24} sm={12} md={8} className="px-2">
        <div className="flex items-center text-lg font-semibold p-2 mb-4 gap-2 bg-green-300 rounded-sm">
          <span>Concluídas</span>
          <Badge color="green" count={tasksDone.length} showZero className="text-xl" />
        </div>
        {tasksDone.map((task) => <div>{task.title}</div>)}
      </Col>
    </Row>
  )
}