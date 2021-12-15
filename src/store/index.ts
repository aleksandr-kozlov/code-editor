import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import persistedReducer from "./persistConfig";
import persistStore from "redux-persist/es/persistStore";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist/es/constants';

const ignoredActions = [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER];

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions,
        }
    }),
    devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;