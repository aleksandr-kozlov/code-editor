import React, {PropsWithChildren} from 'react';
import {Provider} from "react-redux";
import store, {persistor} from "./index";
import { PersistGate } from 'redux-persist/integration/react';
import Loading from "../components/common/Loading/Loading";

const StoreProvider = (props: PropsWithChildren<{}>) => (
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={Loading}>
            {props.children}
        </PersistGate>
    </Provider>
);

export default StoreProvider;