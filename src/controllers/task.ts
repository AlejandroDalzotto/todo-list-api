import type { Request, Response } from "express";
import type { ApiRequest } from "../models/api-request";
import { ApiError } from "../models/api-error";
import { create, deleteById, getAll, getById, updateById } from "../services/task";

export const createTask = async (req: ApiRequest, res: Response) => {

  try {

    const { title, description, status } = req.task!

    const result = await create({ title, description, status })

    return res.status(201).json({
      message: "Task created successfully",
      data: result
    })

  } catch (error) {

    if (error instanceof ApiError) {
      const { status, message } = error

      res.status(status).json({ message })
    }
  }

}

export const getAllTasks = async (_req: Request, res: Response) => {
  try {

    const result = await getAll()

    return res.json({
      message: "Tasks found successfully",
      data: result
    })

  } catch (error) {

    if (error instanceof ApiError) {
      const { status, message } = error

      res.status(status).json({ message })
    }
  }
}

export const getTaskById = async (req: Request, res: Response) => {
  try {

    const { id } = req.params

    const result = await getById(id)

    return res.json({
      message: "Task found successfully",
      data: result
    })

  } catch (error) {

    if (error instanceof ApiError) {
      const { status, message } = error

      res.status(status).json({ message })
    }
  }
}

export const updateTaskById = async (req: ApiRequest, res: Response) => {

  try {
    const { id } = req.params

    const { title, description, status } = req.task!

    const result = await updateById(id, { title, description, status })

    return res.status(201).json({
      message: "Task updated successfully",
      data: result
    })

  } catch (error) {

    if (error instanceof ApiError) {
      const { status, message } = error

      res.status(status).json({ message })
    }
  }

}

export const deleteTaskById = async (req: Request, res: Response) => {

  try {
    const { id } = req.params

    const result = await deleteById(id)

    return res.status(200).json({
      message: "Task deleted successfully",
      data: result
    })

  } catch (error) {

    if (error instanceof ApiError) {
      const { status, message } = error

      res.status(status).json({ message })
    }
  }

}