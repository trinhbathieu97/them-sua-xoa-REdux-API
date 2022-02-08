import { createStore,applyMiddleware } from "redux";
import thunk from "redux-thunk"
import rootReducer from "./Reducer";
// import { composeWithDevTools} from "redux-devtools-extension"

const thunks = [thunk]
const store = createStore(
    rootReducer,
    applyMiddleware(...thunks)
    )
    export default store;