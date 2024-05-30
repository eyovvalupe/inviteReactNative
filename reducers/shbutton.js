import { DROPBUTTON } from "../actions/types";

const initialState = {
    drop: false,

}

const cbReducer = (state=initialState, action) => {
    switch (action.type) {
        case DROPBUTTON:
        return {
            ...initialState,
            drop: true
        };  
    default:
        return state;
    }
}

export default cbReducer