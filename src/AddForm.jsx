import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./features/todoSlice";

export default function AddForm(){
    let [task, setTask] = useState("");
    let dispatch = useDispatch();

    const handleChange = (event)=>{
        setTask(event.target.value);
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        dispatch(addTodo(task));
        setTask("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Add task" value={task} onChange={handleChange}></input>
            <button type="submit">ADD</button>
        </form>
    );
}