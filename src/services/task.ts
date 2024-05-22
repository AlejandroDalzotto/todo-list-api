import { Task } from "../models/task"

export const getAll = async () => {
  const all = await Task.find()

  return all
}

export const getById = async (id: string) => {
  const byId = await Task.findById(id)

  return byId
}

export const create = async (body: any) => {
  const newElement = await Task.create(body)

  return newElement
}

export const updateById = async (id: string, body: any) => {
  const updatedElement = await Task.findByIdAndUpdate(id, body)

  return updatedElement
}

export const deleteById = async (id: string) => {
  const deletedElement = await Task.deleteOne({ _id: id })

  return deletedElement
}