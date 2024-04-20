import type { Request, Response } from 'express'
import { TodoRequestInput } from '../models/Todo'
import TodoRepository from '../repositories/TodoRepository'

export const postTodo = (
  req: Request<any, any, TodoRequestInput>,
  res: Response,
) => {
  try {
    const repo = new TodoRepository()
    const { title, body } = req.body
    const createdTodo = repo.save({ title, body })

    res.status(200).json(createdTodo)
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message })
    }
  }
}
