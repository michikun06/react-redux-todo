// storeは状態を管理するグローバルで単一のオブジェクトである。
// 開発においての一番最初にstoreを作成する処理を作成する。
// Redux内にある同名の createStore という関数を内部で使用するので、as を使って “reduxCreateStore” という名前で importする。
// loggerについて解説　→　https://qiita.com/tataric12/items/3bdf2f3132948e3d75e3

import { createStore as reduxCreateStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger"
import { todoReducer } from "./reducers/Todo";


// 今回使用する全ての状態を管理するstoreをcreateStoreにて作成
// createStore関数を他で使うため、exportする
export default function createStore() {
    const store = reduxCreateStore(

        // 基本的には複数のReducerを利用するため、あらかじめcombineReducers を使って複数のReducerを使えるようにする。
        combineReducers({
            todo: todoReducer,
        }),
        applyMiddleware(
            logger,
        )
    );

    return store;
}