
import { fromJS } from "immutable";
import * as actionType from "./actionType";
const defaultState = fromJS({
    a: '1'
})
export default (state = defaultState, action) => {
    switch(action.type){
        case actionType.getA:
            return state.set('a', '2')
        default:
            return state;
    }
}