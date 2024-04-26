import type { Request, Response } from 'express'
import { TodoRequestInput } from '../models/Todo'
import TodoRepository from '../repositories/TodoRepository'

export default class TodoController {
  private repository: TodoRepository

  constructor(repository: TodoRepository) {
    this.repository = repository
  }

  // Todo1件作成
  create(req: Request<any, any, TodoRequestInput>, res: Response) {
    try {
      const { title, body } = req.body
      const createdTodo = this.repository.save({ title, body })

      res.status(200).json(createdTodo)
      res.status(200).json({})
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message })
      }
    }
  }

  // Todo一覧取得
  list(req: Request, res: Response) {
    const todos = this.repository.list()

    return res.status(200).json(todos)
  }

  // Todo1件取得
  find() {
    // 後ほど実装
  }

  // Todo1件更新
  update() {
    // 後ほど実装
  }

  //
  remove() {
    // 後ほど実装
  }
}
