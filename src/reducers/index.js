import { SET_LINK_VALUE } from '../actions';
import { combineReducers } from 'redux';

const linkValueReducer = (linkValue = 1, action) => {
    switch (action.type) {
        case SET_LINK_VALUE:
            return action.payload;
        default:
            return linkValue;
    }
}


const rootReducer = combineReducers({
    linkValue: linkValueReducer,
});

export default rootReducer;