'use server'
import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {

    const name = formData.get('name') as string
    const description = formData.get('description') as string
    const priority = formData.get('priority') as string

    console.log(formData)

    if (!name || !description || !priority) return

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

export async function deleteTask(formData: FormData) {
    const taskId = formData.get('taskId') as string

    await prisma.task.delete({
        where: { id: taskId }
    })

    revalidatePath('/')
}