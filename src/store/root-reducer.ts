import {combineReducers} from "@reduxjs/toolkit";
import {darkModeReducer} from "./slices/dark-mode";

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
})

export default rootReducer;