// reducers/counterReducer.ts

import { NAVONE, NAVTWO, NAVTHREE } from '../actions/types';

const initialState = {
  tab: 1
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVONE:
        return {
            tab: 1
        };
    case NAVTWO:
        return {
            tab: 2
        };
    case NAVTHREE:
        return {
            tab: 3
        };  
    default:
        return state;
  }
};

export default counterReducer;
