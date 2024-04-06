const Todo = require("../../../models/Todo");

describe("createメソッドのテスト", () => {
  it("メソッド実行時、引数にtitleプロパティを含むオブジェクトがないとエラーになる。", () => {
    const dataList = [{ body: "詳細文" }];
    dataList.forEach((data) => {
      try {
        Todo.create(data);
        fail();
      } catch (error) {
        expect(error.message).toEqual("titleは必須です");
      }
    });
  });

  it("メソッド実行時、引数にbodyプロパティを含むオブジェクトがないとエラーになる。", () => {
    const dataList = [{ title: "詳細文" }];
    dataList.forEach((data) => {
      try {
        Todo.create(data);
        fail();
      } catch (error) {
        expect(error.message).toEqual("bodyは必須です");
      }
    });
  });
  it("メソッド実行時、正しい引数を渡すと、新規にTodoデータを作成し、Todo配列にデータを追加する", () => {
    const data = {
      title: "ダミータイトル",
      body: "ダミーボディ",
    };

    const createTodo = Todo.create(data);
    expect(createTodo).toEqual({
      id: createTodo.id,
      title: data.title,
      body: data.body,
      createdAt: createTodo.createdAt,
      updatedAt: createTodo.updatedAt,
    });
  });
});
