const todos = [];

let nextId: number = 1;
export interface TodoInput {
  title: string;
  body: string;
}
export class Todo {
  private readonly id: number;
  private readonly title: string;
  private readonly body: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  constructor({ title, body }: TodoInput) {
    if (!title) {
      throw new Error("titleは必須です");
    }
    if (!body) {
      throw new Error("bodyは必須です");
    }

    this.id = nextId++;
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

export const create = ({ title, body }: TodoInput) => {
  const todo = new Todo({
    title: title,
    body: body,
  });
  todos.push(todo);

  return todo;
};
