import { Request } from "express";
import { TaskRequest } from "../helpers/validate-task-data";

export interface ApiRequest extends Request {
  task?: TaskRequest | null
}