
import { INCREMENT, DECREMENT, RESET } from "../actions/actionTypes.js";

let counterInitialState = 0;

const counterReducer = (state=counterInitialState, actions) => {

    switch(actions.type){
        case INCREMENT:
            return state + actions.payload;
            case DECREMENT:
                return state - actions.payload;
                case RESET:
                    return 0;
                    default:
                        return state;
    }
}
export default counterReducer;