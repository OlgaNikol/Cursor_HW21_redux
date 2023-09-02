import {reducer} from "./reducer";
import {legacy_createStore as createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

export default store;