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
});
