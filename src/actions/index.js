import { setLinkValue } from './setLinkValueAction';

// export const setLinkValue = (linkValue) => {
//     return {
//         type: SET_LINK_VALUE,
//         payload: linkValue
//     };
// };

// export const setLinkValue = (linkValue) => {
//     return {
//         type: SET_LINK_VALUE,
//         linkValue,
//     };
// };

export const setLinkValueAsync = (linkValue) => (dispatch) => {
  dispatch(setLinkValue(linkValue))
}
