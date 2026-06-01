import { Button } from './ui/button'
import { deleteTask } from '@/app/new/task.actions'

function TaskButtonDelete({taskId}: {taskId: string}) {
  return (
    <form action={deleteTask}>
        <input type="hidden" name="taskId" value={taskId} />
        <Button variant="destructive">
            Delete
        </Button>
    </form>
  )
}

export default TaskButtonDelete
