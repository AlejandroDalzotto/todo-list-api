export class ApiError extends Error {
  status: number

  constructor(message: string, status: 200 | 201 | 400 | 404 | 500) {
    super(message)
    this.status = status
    this.name = "ApiError"
  }
}