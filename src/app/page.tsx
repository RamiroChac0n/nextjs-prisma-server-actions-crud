import TaskCard from "@/components/task-card"
import prisma from "@/lib/prisma"


async function HomePage() {

  const taskList = await prisma.task.findMany()

  return (
    <div className="grid grid-cols-3 gap-4">
      {
        taskList.map(task => (
          <TaskCard task={task} key={task.id}/>
        ))
      }
    </div>
  )
}

export default HomePage
