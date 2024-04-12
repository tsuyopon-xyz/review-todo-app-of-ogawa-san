import { create } from '../../../models/Todo'

describe('models/Todo.ts', () => {
  describe('正常パターン', () => {
    describe('createメソッド', () => {
      const data = {
        title: 'ダミータイトル',
        body: 'ダミーボディ',
      }

      const createdTodo = create({ title: 'abc', body: 'def' })
      expect(createdTodo).toEqual({
        id: createdTodo.id,
        title: 'abc',
        body: 'def',
        createdAt: createdTodo.createdAt,
        updatedAt: createdTodo.updatedAt,
      })
    })
  })
  describe('異常パターン', () => {
    describe('createメソッド', () => {
      it('titleが空文字だったらエラーになる', () => {
        expect(() => create({ title: '', body: 'a' })).toThrow(
          new Error('titleは1文字以上の文字列で必須です'),
        )
      })

      it('bodyが空文字だったらエラーになる', () => {
        expect(() => create({ title: 'a', body: '' })).toThrow(
          new Error('bodyは1文字以上の文字列で必須です'),
        )
      })
    })
  })
})
