
import { createStore } from "redux";
import counterReducer from "./reducers/counterReducer.js";

const store = createStore(counterReducer);

export default store;

// it will store always latest value of counterReducer file.