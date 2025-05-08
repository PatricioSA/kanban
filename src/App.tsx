import { Button, ConfigProvider, theme } from "antd"
import { Typography } from 'antd';
import TaskBoard from "./components/TaskBoard"
import { useState } from "react"

const { Title } = Typography;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  return (
    <ConfigProvider theme={{
      algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
    }}>
      <main className={`p-4 transition-colors ${isDarkMode ? "bg-gray-900" : "bg-white"}`}>
        <header className="flex justify-between items-center px-3">
          <Title>Meu Kanban</Title>
          <Button onClick={() => setIsDarkMode(!isDarkMode)}>Trocar tema</Button>
        </header>
        <TaskBoard />
      </main>
    </ConfigProvider>
  )
}

export default App
