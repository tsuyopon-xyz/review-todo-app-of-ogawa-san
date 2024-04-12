const todos = [];

let nextId: number = 1;
interface TodoElemet {
  title: string;
  body: string;
}
export class Todo {
  private readonly id: number;
  private readonly title: string;
  private readonly body: string;
  private readonly createdAt: Date;
  private readonly updatedAt: Date;

  constructor({ title, body }: TodoElemet) {
    this.id = nextId++;
    this.title = title;
    this.body = body;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}

module.exports = {
  create: ({ title, body }: TodoElemet) => {
    if (!title) {
      throw new Error("titleは必須です");
    }
    if (!body) {
      throw new Error("bodyは必須です");
    }

    const todo = new Todo({
      title: title,
      body: body,
    });
    todos.push(todo);

    return todo;
  },
};
