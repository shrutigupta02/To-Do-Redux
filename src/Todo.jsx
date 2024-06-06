import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "./features/todoSlice";
import { markAsDone } from "./features/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);
    let dispatch = useDispatch();

    let onDelete = (id) =>{
        dispatch(deleteTodo(id));
        console.log(id);
    }

    let onDone = (id) =>{
        dispatch(markAsDone(id));
    }

    return(
        <div>
            <AddForm/>
            <h3>Todos</h3>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        {todo.isDone?
                        <span><s>{todo.task}</s></span>:
                        <span>{todo.task}</span>
                    }
                        &nbsp;
                        <button onClick={()=>onDelete(todo.id)}>DEL</button>
                        &nbsp;
                        <button onClick={()=>onDone(todo.id)}>DONE</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}