import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: "sample-id", task: "sample-task", isDone: false}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo : (state, action)=>{
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo : (state, action) =>{
            state.todos = state.todos.filter((todo)=> action.payload !== todo.id);
        },
        markAsDone : (state, action)=>{
            state.todos.map((todo)=> {
                if(todo.id === action.payload)
                todo.isDone = true;
            });
        }
    } 
});

export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions;
export default todoSlice.reducer;
