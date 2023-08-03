
import store from "./store.js";
import { increment, decrement, reset } from "./actions/CounterActions.js";

//redux will provide you a function called getState()
//this will help you to get the current state of store variable

//get initial value
console.log("initial value", store.getState());

//subscribe()
store.subscribe(
    ()=> console.log("updated value", store.getState())
)

//lets do some actions:
//increment actions

store.dispatch(increment(10))
store.dispatch(increment(7))
store.dispatch(decrement(15))
store.dispatch(reset())