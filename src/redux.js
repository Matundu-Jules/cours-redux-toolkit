import { configureStore, createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
    ],
    reducers: {
        addTask: (state, action) => {
            // Exemple action : { type: "ADD_TASK", payload: "Aller faire les courses." }
            // En réalité. todo fait référence au nom du slice : { type: "todo/addTask", payload: "Aller faire les courses." }
            const newTask = {
                id: crypto.randomUUID(),
                done: false,
                text: action.payload,
            }
            state.push(newTask);
        },
        toggleTask: (state, action) => {
            // {type: "TOGGLE_TASK", payload: 20(exemple pour l'id) }
            // {type: "todo/toggleTask", payload: 20(exemple pour l'id) }
            const task = state.find(t => t.id === action.payload);
            task.done = !task.done;
        },
        deleteTask: (state, action) => {
            // {type: "DELETE_TASK", payload: 20(exemple pour l'id) }
            // {type: "todo/deleteTask", payload: 20(exemple pour l'id) }
            state = state.filter(t => t.id !== action.payload );
            return state
        }
    }
})

export const store = configureStore({
    reducer: {
        todo: todoSlice.reducer,
    }
})


// Sans Action Creator :
// const action = {
//     type: 'todo/toggleTask', 
//     payload: 20
// }

// Action Creator :
// Permet d'éviter les répétition et améliore la lisibilité du code dans l'appel des events.
// export const createToggle = (id) => {
//     return {
//         type: 'todo/toggleTask', 
//         payload: id
//       }
// }
// export const addTask = (text) => {
//     return {
//         type: 'todo/addTask', 
//         payload: text
//       }
// }
// export const deleteTask = (id) => {
//     return {
//         type: 'todo/deleteTask', 
//         payload: id
//       }
// }

// Exemple utilisation Action Creator :
// const action = createToggle(20)

export const {addTask, deleteTask, toggleTask} = todoSlice.actions