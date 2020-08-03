// ActionはReducerにして欲しい処理を伝えるためのメッセージ
// typeプロパティが必ずあり、処理のキーとなる。
// payloadプロパティは処理に使うパラメータで、今回は”TODO”

export const addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        payload: { todo: todo }
    };
}