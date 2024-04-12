const Todo = require("../models/Todo");

module.exports = {
  postTodo: (req: Request, res: Response) => {
    try {
      const { title, body } = req.body;
      const createdTodo = Todo.create({ title, body });

      res.status(200).json(createdTodo);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};
