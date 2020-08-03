// 実際にviewの部分を作成していく
// １、ToDo追加用のテキストボックスとボタン、表示するToDoリストをべたがきにしておく
import React from 'react';

export default class Todo extends React.Component {
    state = {
        todo: ''
    }

    render() {
        console.log(this.props);

        // StoreのTodoからリストを作成
        const list = this.props.todo.todoList.map((todo, index) => <li key={index}>{todo}</li>)

        return (
            <div>
                <input type="text" onChange={elm => this.setState({ todo: elm.target.value })} />
                <button onClick={() => this.props.addTodo(this.state.todo)}>追加</button>
                <ul>
                    <li>{list}</li>
                </ul>
            </div>
        );
    }
}