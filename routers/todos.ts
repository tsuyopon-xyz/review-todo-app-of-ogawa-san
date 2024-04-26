import express from 'express'
import TodoRepository from '../repositories/TodoRepository'
import TodoController from '../controllers/TodoController'

const todoRepository = new TodoRepository()
// TodoControllerにTodoRepositoryインスタンスを渡すことで、
// TodoControllerインスタンス内で共通のRepositoryを使いますことができる。
// 今回の例で言うと「同じRepositoryインスタンスを使う = 同じDBを使う」ことになるので、メモリ上のダミーのDBの共通化ができる
const todoController = new TodoController(todoRepository)

const router = express.Router()

router
  .route('/')
  .post((req, res) => todoController.create(req, res))
  .get((req, res) => todoController.list(req, res))

// 以下のようにpostメソッドをそのまま渡すとAPIの一連の処理でtodoController.createメソッドを実行するとエラーになった。
// 以下の方法で実行した場合のtodoController.createメソッドの中にconsole.log(this)を記述し、thisの内容を確認すると `undefined` になっていた。
// つまり、`this.repository` が `undefined.repository` のような形となり、undefinedにrepositoryプロパティは存在しないというエラーメッセージが出力されるようになってしまう。
// ↓
// router.route('/').post(todoController.create)
//
// そのため、以下のような記述にしてthisがundefinedにならず、thisがTodoControllerインスタンスになるようにした。
// ↓
// router.route('/').post((req, res) => todoController.create(req, res))

export default router
