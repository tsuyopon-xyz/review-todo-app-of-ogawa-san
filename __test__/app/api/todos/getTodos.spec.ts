import { requestAPI } from '../../../helper/requestHelper'
import { Todo } from '../../../../models/Todo'

describe('getメソッドのテスト(Todo一覧取得APIの動作テスト)', () => {
  beforeAll(async () => {
    // DBに初期データを数件セットできるようにした方が、より依存関係が少ないテストとなるが、
    // 現状は `POST /api/todos` 経由で初期データを入れるようにした方が実装が楽なため、
    // テスト(it)が実行される前に呼ばれるJestのメソッド `beforeAll` もしくは `beforeEach` を初期データを入れている
    const initialData = [
      { title: 't1', body: 'b1' },
      { title: 't2', body: 'b2' },
      { title: 't3', body: 'b3' },
    ]

    for (const data of initialData) {
      await requestAPI({
        method: 'post',
        endPoint: '/api/todos',
        statusCode: 200,
      }).send(data)
    }
  })

  it('DB内のデータを全て取得する', async () => {
    const response = await requestAPI({
      method: 'get',
      endPoint: '/api/todos',
      statusCode: 200,
    })

    const todos: Todo[] = response.body

    expect(todos.length).toEqual(3)
    expect(todos.map((todo) => todo.id)).toEqual([1, 2, 3])
    expect(todos.map((todo) => todo.title)).toEqual(['t1', 't2', 't3'])
    expect(todos.map((todo) => todo.body)).toEqual(['b1', 'b2', 'b3'])
  })
})
