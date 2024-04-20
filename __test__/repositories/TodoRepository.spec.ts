import TodoRepository from '../../repositories/TodoRepository'
import { Todo } from '../../models/Todo'

describe('TodoRepositoryクラス', () => {
  describe('constructor', () => {
    it('引数なしでインスタンス生成できる', () => {
      const repo = new TodoRepository()
      expect(repo).toBeInstanceOf(TodoRepository)
    })

    it('引数ありでインスタンス生成できる', () => {
      const repo = new TodoRepository([{ title: 't', body: 'b' }])
      expect(repo).toBeInstanceOf(TodoRepository)
    })
  })
  describe('saveメソッド', () => {
    it('idがインクリメントされて、Todoインスタンスが返ってくる', () => {
      const repo = new TodoRepository()
      const result1 = repo.save({ title: 't1', body: 'b1' })
      const result2 = repo.save({ title: 't2', body: 'b2' })

      expect(result1).toBeInstanceOf(Todo)
      expect(result1.id).toEqual(1)
      expect(result1.title).toEqual('t1')
      expect(result1.body).toEqual('b1')
      expect(result1.createdAt).toBeInstanceOf(Date)
      expect(result1.updatedAt).toBeInstanceOf(Date)

      expect(result2).toBeInstanceOf(Todo)
      expect(result2.id).toEqual(2)
      expect(result2.title).toEqual('t2')
      expect(result2.body).toEqual('b2')
      expect(result2.createdAt).toBeInstanceOf(Date)
      expect(result2.updatedAt).toBeInstanceOf(Date)
    })
  })
  describe('listメソッド', () => {
    it('初期データを入れたら、初期データを取得できる', () => {
      const repo = new TodoRepository([
        { title: 't1', body: 'b1' },
        { title: 't2', body: 'b2' },
      ])
      const results = repo.list()
      const [result1, result2] = results

      expect(results.length).toEqual(2)

      expect(result1).toBeInstanceOf(Todo)
      expect(result1.id).toEqual(1)
      expect(result1.title).toEqual('t1')
      expect(result1.body).toEqual('b1')
      expect(result1.createdAt).toBeInstanceOf(Date)
      expect(result1.updatedAt).toBeInstanceOf(Date)

      expect(result2).toBeInstanceOf(Todo)
      expect(result2.id).toEqual(2)
      expect(result2.title).toEqual('t2')
      expect(result2.body).toEqual('b2')
      expect(result2.createdAt).toBeInstanceOf(Date)
      expect(result2.updatedAt).toBeInstanceOf(Date)
    })

    it('初期データを入れた後にデータを追加したら、初期データの後ろにデータを追加する', () => {
      const repo = new TodoRepository([
        { title: 't1', body: 'b1' },
        { title: 't2', body: 'b2' },
      ])
      const result = repo.save({ title: 't3', body: 'b3' })
      const list = repo.list()

      expect(list.length).toEqual(3)
      expect(result).toEqual(list[2])
    })
  })
})
