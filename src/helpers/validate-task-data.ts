import { z } from "zod"
import { ApiError } from "../models/api-error"

const TaskSchema = z.object({
  title: z.string(),
  description: z.string().nullable(),
  status: z.enum(["pendiente", "en progreso", "completada"])
})

export type TaskRequest = z.infer<typeof TaskSchema>

export const validateTaskData = (data: any): [ApiError?, TaskRequest?] => {
  const result = TaskSchema.safeParse(data)

  if (result.success) {

    return [undefined, result.data]
  }

  return [new ApiError("Invalid field on task body", 400), undefined]
}