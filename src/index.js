// 必要なものをimportする
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// import serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import createStore from "./createStore";


// createStore.jsで作ったcreateStoreをstoreに代入し、Reactに組み込む。
const store = createStore();


// 作成したstoreをProviderに渡し、Appをラップする。これで全component内でstateを使用できる。
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// serviceWorker();