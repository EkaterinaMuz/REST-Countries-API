import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
    persistReducer, persistStore,
    // FLUSH,
    // REHYDRATE,
    // PAUSE,
    // PERSIST,
    // PURGE,
    // REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { ThemeReducer } from "./theme/themeSlice";
import { controlsReducer } from "./controls/controlsSlice";
import { countriesReducer } from "./countries/countriesSlice";
import { detailsReducer } from "./details/detailsSlice";
import { useDispatch } from "react-redux";

const persistConfig = {
    key: 'theme',
    storage,
    whitelist: ['theme']
};

const rootReducer = combineReducers({
    theme: ThemeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    country: detailsReducer

});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    // middlware: (getDefaultMiddleware) => getDefaultMiddleware({
    //     serializableCheck: {
    //         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    //     },
    // }),


});


export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;