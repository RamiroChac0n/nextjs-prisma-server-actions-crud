'use server'
import prisma from "@/lib/prisma"
import { AArrowUp } from "lucide-react";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {

    const taskName = formData.get('name') as string
    const taskDescription = formData.get('description') as string
    const taskPriority = formData.get('priority') as string

    console.log(formData)

    if (!taskName || !taskDescription || !taskPriority) return

    const newTask = await prisma.task.create({
        data: {
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
        }
    })
    console.log(newTask)
    redirect('/')
}

export async function deleteTask(formData: FormData) {
    const taskId = formData.get('taskId') as string

    await prisma.task.delete({
        where: { id: taskId }
    })

    revalidatePath('/')
}

export async function findTaskById(id: string){
    const task = await prisma.task.findFirstOrThrow({
        where: {
            id: id
        }
    })
    return task
}

export async function updateTask(formData: FormData) {

    const taskId = formData.get('id') as string
    const taskName = formData.get('name') as string
    const taskDescription = formData.get('description') as string
    const taskPriority = formData.get('priority') as string

    if (!taskId || !taskName || !taskDescription || !taskPriority) return

    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            name: taskName,
            description: taskDescription,
            priority: taskPriority,
        }
    })

    redirect('/')
}