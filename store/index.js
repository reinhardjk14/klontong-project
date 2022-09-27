import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { itemsReducer } from "./reducers/itemsReducer";

const store = createStore(itemsReducer, applyMiddleware(thunk))

export default store