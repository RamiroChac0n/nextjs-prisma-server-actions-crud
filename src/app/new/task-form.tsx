import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { createTask, updateTask } from "./task.actions";
import { Task } from "@/generated/prisma/browser"
import Link from "next/link"

export function TaskForm({ task }: { task?: Task }) {

  const functionAction = task?.id ? updateTask : createTask;

  return (
    <form action={functionAction} className="w-full max-w-sm">
      <input type='hidden' name='id' value={task?.id ?? ''} />
      <Card>
        <CardHeader>
          <CardTitle>
            {task?.id ? 'Update Task' : 'Create Task'}
          </CardTitle>
          <CardDescription>
            Enter task details below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="Name of your task"
                defaultValue={task?.name ?? ''}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description of your task"
                defaultValue={task?.description ?? ''}
                required
              />
            </div>
            <div className="grid gap-2 items-center">
              <Label htmlFor="priority">Priority</Label>
              <Select
                name="priority"
                defaultValue={task?.priority ?? ''}
                required>
                <SelectTrigger id="priority" className="w-full">
                  <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link href='/' className={buttonVariants({variant: 'secondary'})}>
            Cancel
          </Link>
          <Button type="submit">
            {task?.id ? 'Update Task' : 'Create Task'}
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
