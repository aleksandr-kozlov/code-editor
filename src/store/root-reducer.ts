import {combineReducers} from "@reduxjs/toolkit";
import {darkModeReducer} from "./slices/dark-mode";
import { filesReducer } from "./slices/files";

const rootReducer = combineReducers({
    darkMode: darkModeReducer,
    files: filesReducer,
})

export default rootReducer;