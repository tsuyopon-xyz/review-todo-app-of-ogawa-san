import { Todo } from '../../models/Todo'

describe('Todoクラス', () => {
  describe('constructor', () => {
    it('インスタンス生成時, titleが空文字だと例外が発生する', () => {
      const data = {
        id: 1,
        title: '',
        body: 'b',
      }
      expect(() => new Todo(data)).toThrow('titleの内容は必須です')
    })

    it('インスタンス生成時、bodyが空文字だと例外が発生する', () => {
      const data = {
        id: 1,
        title: 't',
        body: '',
      }
      expect(() => new Todo(data)).toThrow('bodyの内容は必須です')
    })

    it('インスタンス生成時、title, bodyが1文字以上の文字列だとエラーは発生しない', () => {
      const data = {
        id: 1,
        title: 't',
        body: 'b',
      }
    })
  })

  it('メソッド実行時、bodyプロパティの値が入力されていないとエラーになる。', () => {
    const data = {
      id: 1,
      title: 't',
      body: 'b',
    }

    const instance = new Todo(data)
    expect(instance.id).toEqual(1)
    expect(instance.title).toEqual('t')
    expect(instance.body).toEqual('b')
    expect(instance.createdAt).toBeInstanceOf(Date)
    expect(instance.updatedAt).toBeInstanceOf(Date)
  })
})
