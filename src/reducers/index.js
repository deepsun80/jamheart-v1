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

// const feedPageValueReducer = (feedPageValue = null, action) => {
//     switch (action.type) {
//         case SET_FEED_PAGE_VALUE:
//             return action.payload;
//         default:
//             return feedPageValue;
//     }
// }

const rootReducer = combineReducers({
    linkValue: linkValueReducer,
    //feedPageValue: feedPageValueReducer
});

export default rootReducer;