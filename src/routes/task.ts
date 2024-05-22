import { Router } from "express"
import { createTask, deleteTaskById, getAllTasks, getTaskById, updateTaskById } from "../controllers/task"
import { validateBodyRequest } from "../middleware/validate-body-request"

const baseUrl = "/tasks"

export const taskRoute = Router()

// Crear nueva tarea.
taskRoute.post(`${baseUrl}/add`, validateBodyRequest, createTask)

// Obtener todas las tareas.
taskRoute.get(`${baseUrl}/all`, getAllTasks)

// Obtener por id.
taskRoute.get(`${baseUrl}/:id`, getTaskById)

// Actualizar por id.
taskRoute.patch(`${baseUrl}/:id`, validateBodyRequest, updateTaskById)

// Eliminar por id.
taskRoute.delete(`${baseUrl}/:id`, deleteTaskById)