//action creators
//action creators are function that return actions
//action is an object
//type property of actions is the name of action 
import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js";


export const increment = (value) => {
    return(
        {
            type: INCREMENT,
            payload: value
        }
    )
}

export const decrement = (value) => {
    return(
        {
            type: DECREMENT,
            payload: value
        }
    )
}

export const reset = () => {
    return(
        {
            type: RESET
        }
    )
}