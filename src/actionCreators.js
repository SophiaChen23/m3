// actionCreators.js

import { STATUS_FILTER_CHANGED, COLOR_FILTER_CHANGED ,TODO_TOGGLED, TODO_COLOR_SELECTED, TODO_DELETED } from './actionTypes';


export const statusFilterChanged = (status) => {
    return {
        type: STATUS_FILTER_CHANGED,
        payload: status,
    };
};

export const colorFilterChanged = (color, changeType) => {
    return {
        type: COLOR_FILTER_CHANGED,
        payload: { color, changeType },
    };
};


// actionCreators.js

export const todoToggled = (todoId) => {
    return {
        type: TODO_TOGGLED,
        payload: todoId,
    };
};

export const todoColorSelected = (todoId, color) => {
    return {
        type: TODO_COLOR_SELECTED,
        payload: { todoId, color },
    };
};

export const todoDeleted = (todoId) => {
    return {
        type: TODO_DELETED,
        payload: todoId,
    };
};
