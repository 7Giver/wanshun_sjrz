
import * as actionType from "./actionType";

export const getAaction = (v)=>{
    return {
        type: actionType.getA,
        date: v
    }
}