import { TaskForm } from "@/app/new/task-form"
import { findTaskById } from "@/app/new/task.actions"

async function TaskPageEdit({params} : {
  params: Promise<{id: string}>
}) {

  const {id} = await params
  const task = await findTaskById(id)

  return (
    <div className="flex justify-center items-center h-screen">
      <TaskForm task={task}/>
    </div>
  )
}

export default TaskPageEdit
