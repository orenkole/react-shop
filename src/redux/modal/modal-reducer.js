import {OPEN_MODAL, CLOSE_MODAL} from "./modal-action-creators";

const INITIAL_STATE = {
    isModalOpen: false
}

const modalReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                isModalOpen: false,
            };
        default:
            return state;
    }
}

export {modalReducer};