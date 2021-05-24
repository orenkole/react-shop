import {
    LOAD_STARTED, 
    LOAD_SUCCESS, 
    SET_FAV_ARTS, 
    SET_CART_ARTS, 
    STAGE_ADD_ARTICUL_TO_CART,
    STAGE_DELETE_ARTICUL_FROM_CART,
    CLEAR_CART_ARTS,
} from "./items-action-creators";

const INITIAL_STATE = {
    isLoadingSuccess: false,
    favItemsArts: [],
    cartItemsArts: [],
    items: [],
    addToCartArt: null,
    deleteFromCartArt: null,
}

const itemsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOAD_STARTED:
            return {
                ...state,
                isLoadingSuccess: false,
            };
        case LOAD_SUCCESS:
            return {
                ...state,
                isLoadingSuccess: true,
                items: action.payload.items,
            };
        case SET_FAV_ARTS:
            return {
                ...state,
                favItemsArts: action.payload,
            };
        case SET_CART_ARTS:
            return {
                ...state,
                cartItemsArts: action.payload,
            };
        case STAGE_ADD_ARTICUL_TO_CART: 
            return {
                ...state,
                addToCartArt: action.payload,
            };
        case STAGE_DELETE_ARTICUL_FROM_CART:
            return {
                ...state,
                deleteFromCartArt: action.payload,
            };
        case CLEAR_CART_ARTS: 
            return {
                ...state,
                cartItemsArts: []
            }
        default:
            return state;
    }
}

export {itemsReducer};