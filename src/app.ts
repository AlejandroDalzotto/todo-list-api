import express from "express"
import { connect } from "./database/connection"
import { taskRoute } from "./routes/task"

const app = express()

app.use(express.json())

app.use("/api", taskRoute)

connect();

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000")
})