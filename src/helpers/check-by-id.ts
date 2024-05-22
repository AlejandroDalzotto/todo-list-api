import { Task } from "../models/task"

export const existById = async (id: string) => {

  const result = await Task.findById(id)

  return Boolean(result)
}