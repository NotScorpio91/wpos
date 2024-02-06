import { configureStore } from '@reduxjs/toolkit';
import reducers from './index';

import storage from 'redux-persist/lib/storage'; // Choose the storage method (local storage, session storage, etc.)
import {
    persistStore,
    persistReducer,
} from "redux-persist";


const persistConfig = {
    key: 'root', // key to store the data in storage
    storage, // choose your storage method
};

const persistedReducer = persistReducer(persistConfig, reducers);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})

export const persistor = persistStore(store);