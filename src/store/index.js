import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import CotiReducer from "./DataCoti";
import DataReducer from "./DataNew";

const rootReducer = combineReducers({
    core: CotiReducer,
    datos: DataReducer,
});

export default function generateStore () {
    const store = createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunk))
    );
    return store;
}