// containerでcomponentとreduxによる状態管理を結びつける。
import { connect } from "react-redux";
import * as actions from '../actions/Todo';
import Todo from '../components/Todo';


// mapDispatchToProps関数はこのcomponentで使用するstateを切り出し、
// propsにマッピングするためのもの
const mapStateToProps = state => {
    return {
        todo: state.todo,
    }
}

// mapDispatchToProps関数は、dispatchするための関数を
// propsにマッピングするための関数
const mapDispatchToProps = dispatch => {
    return {
        addTodo: (todo) => dispatch(actions.addTodo(todo))
    }
}

// 定義したものをそれぞれconnect関数にてcomponentに接続し、exportする。
// これにより、componentはreduxによる状態管理を意識せずにstateやdispatchを参照、実行できる。
export default connect(mapStateToProps, mapDispatchToProps)(Todo)
