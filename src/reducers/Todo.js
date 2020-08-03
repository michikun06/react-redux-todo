// reducerは、引数として現在の状態（state）と、
// 定義したActionを受け取り、受け取ったaction.typeに応じた状態の
// stateを返すことでstateを更新する。


// todoListhの初期値を設定
const initialState = {
    todoList: []
}

// 引数として、stateには現在の状態が入る
export const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        // action.type別で処理を分岐（ADD_TODOの場合）
        case 'ADD_TODO':
            // 新しく追加するTODO
            const todo = action.payload.todo;
            //　からの配列を新たに作成して、現在Listにある（state）TODOを複製する。
            const newState = Object.assign({}, state);
            // 複製したものに、新たなTodoを追加し、returnする。
            newState.todoList.push(todo);
            return newState;

        // action.type別で処理を分岐（変化なしの場合）
        default:
            return state;
    }
};