import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/lib/persistReducer';
import rootReducer from "./root-reducer";

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['darkMode'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
