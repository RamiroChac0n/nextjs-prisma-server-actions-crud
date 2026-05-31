import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
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
import prisma from "@/lib/prisma"
import { redirect } from "next/navigation";

export function TaskForm() {

  async function createTask(formData: FormData) {
    'use server'

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const priority = formData.get('priority') as string

    console.log(formData)

    if( !name || !description || !priority ) return 

    const newTask = await prisma.task.create({
      data: {
        name: name,
        description: description,
        priority: priority,
      }
    })
    console.log(newTask)
    redirect('/')
  }

  return (
    <form action={createTask} className="w-full max-w-sm">
      <Card>
        <CardHeader>
          <CardTitle>Create Task</CardTitle>
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
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Description of your task"
                required
              />
            </div>
            <div className="grid gap-2 items-center">
              <Label htmlFor="priority">Priority</Label>
              <Select name="priority" required>
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
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Create Task
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
