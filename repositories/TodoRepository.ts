import type { TodoRequestInput } from '../models/Todo'
import { Todo } from '../models/Todo'

export default class TodoRepository {
  private nextId = 1
  private db: Todo[] = []

  constructor(initialInputData?: TodoRequestInput[]) {
    if (!initialInputData || initialInputData.length === 0) {
      return
    }

    for (const input of initialInputData) {
      this.save(input)
    }
  }

  save(input: TodoRequestInput): Todo {
    const dataToSave = new Todo({
      id: this.nextId,
      ...input,
    })

    this.db.push(dataToSave)
    this.nextId++

    return dataToSave
  }

  list(): Todo[] {
    return this.db.slice()
  }
}
