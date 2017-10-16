export const SET_LINK_VALUE = 'SET_LINK_VALUE';
//export const SET_CHANNEL_VALUE = 'SET_CHANNEL_VALUE';

export const setLinkValue = (linkValue) => {
    return {
        type: SET_LINK_VALUE,
        payload: linkValue
    };
};

// export const setChannelValue = (setChannelValue) => {
//     return {
//         type: SET_CHANNEL_VALUE,
//         payload: setChannelValue
//     }
// };