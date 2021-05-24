export const LOAD_STARTED = "LOAD_STARTED";
export const LOAD_SUCCESS = "LOAD_SUCCESS";
export const SET_FAV_ARTS = "SET_FAV_ARTS";
export const SET_CART_ARTS = "SET_CART_ARTS";
export const CLEAR_CART_ARTS = "CLEAR_CART_ARTS";
export const STAGE_ADD_ARTICUL_TO_CART = "STAGE_ADD_ARTICUL_TO_CART";
export const STAGE_DELETE_ARTICUL_FROM_CART = "STAGE_DELETE_ARTICUL_FROM_CART";

export const loadItemsAC = () => async (dispatch) => {
    dispatch({ type: LOAD_STARTED })
    try {
        const items = await fetch(`${process.env.PUBLIC_URL}/shop-data.json`)
            .then(res => res.json());
        dispatch({ type: LOAD_SUCCESS, payload: items });
    } catch (err) {
        return new Error("Failed to load items")
    }
}

export const setFavItemsArtsAC = (favItemsArts) => {
    return { type: SET_FAV_ARTS, payload: favItemsArts }
}

export const getFavItemsArtsAC = () => async (dispatch) => {
    const favItemsArts = localStorage.getItem("favItemsArts")
        ? JSON.parse(localStorage.getItem("favItemsArts"))
        : [];
    dispatch(setFavItemsArtsAC(favItemsArts));
}


export const setCartItemsArtsAC = (cartItemsArts) => {
    return { type: SET_CART_ARTS, payload: cartItemsArts }
}

export const getCartItemsArtsAC = () => async (dispatch) => {
    const cartItemsArts = localStorage.getItem("cartItemsArts")
        ? JSON.parse(localStorage.getItem("cartItemsArts"))
        : [];
    dispatch(setCartItemsArtsAC(cartItemsArts));
}

export const stageAddItemToCartAC = (itemArticul) => {
    return {type: STAGE_ADD_ARTICUL_TO_CART, payload: itemArticul}
}

export const stageDeleteItemFromCartAC = (itemArticul) => {
    return {type: STAGE_DELETE_ARTICUL_FROM_CART, payload: itemArticul}
}

export const cleartCartArtsAC = () => {
    return {type: CLEAR_CART_ARTS}
}