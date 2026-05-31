import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/prisma"
import clsx from "clsx"


async function HomePage() {

  const taskList = await prisma.task.findMany()

  return (
    <div className="grid grid-cols-3 gap-4">
      {
        taskList.map(task => (
          <Card key={task.id}>
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
              <Button>
                Edit
              </Button>
              <Button variant='destructive'>
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  )
}

export default HomePage
