import type { NextFunction, Request, Response } from "express";
import { validateTaskData } from "../helpers/validate-task-data";
import { ApiError } from "../models/api-error";
import type { ApiRequest } from "../models/api-request";

export const validateBodyRequest = (req: ApiRequest, res: Response, next: NextFunction) => {

  try {
    const { title, description, status } = req.body
    const [error, task] = validateTaskData({ title, description, status })

    if (error) {
      throw error
    }

    req.task = task

    next()

  } catch (error) {
    if (error instanceof ApiError) {
      const { status, message } = error

      res.status(status).json({ message })
    }
  }
}