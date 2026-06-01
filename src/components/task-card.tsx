import { Badge } from "@/components/ui/badge"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Task } from "@/generated/prisma/client"
import clsx from "clsx"
import TaskButtonDelete from "./task-button-delete"
import Link from "next/link"

function TaskCard({task}: {task: Task}) {
  return (
          <Card>
            <CardHeader className="flex justify-between">
              <CardTitle>
                {task.name}
              </CardTitle>
              <Badge className={
                clsx({
                  "bg-green-500": task.priority === "low",
                  "bg-yellow-500": task.priority === "medium",
                  "bg-red-500": task.priority === "high",
                })
              }>
                {task.priority}
              </Badge>
            </CardHeader>
            <CardContent className="grid gap-2">
              <CardDescription>
                {task.description}
              </CardDescription>
              <span className="text-slate-500">
                {new Date(task.createdAt).toLocaleDateString()}
              </span>
            </CardContent>
            <CardFooter className="flex gap-x-2 justify-end">
              <Link href={`/tasks/${task.id}/edit`} className={buttonVariants({variant: "secondary"})}>
                Edit
              </Link>
              <TaskButtonDelete taskId={task.id} />
            </CardFooter>
          </Card>
  )
}

export default TaskCard
