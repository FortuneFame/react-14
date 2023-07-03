import {
    INCREASE_COUNTER,
    DECREASE_COUNTER
} from '../constants/constants';
import {
    counterItitStore,
} from '../store';

export const counterReducer = (state = counterItitStore, action) => {
    switch (action.type) {
       case INCREASE_COUNTER:
            return {
                ...state,
                counter: state.counter * 2
            };
        case DECREASE_COUNTER:
            return {
                ...state,
                counter: state.counter / 2
            };
        default:
            return state;
    };
};