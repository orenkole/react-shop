import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {itemsReducer} from "./items/items-reducer";
import {modalReducer} from "./modal/modal-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducer } from "./checkoutForm/user-reducer";

const rootReducer = combineReducers({
    itemsData: itemsReducer, 
    modalData: modalReducer,
    userData: userReducer,
})

const middlewareEnhancer = applyMiddleware(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

const store = createStore(rootReducer, composedEnhancers);

window.store = store;

export default store;