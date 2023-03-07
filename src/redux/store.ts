import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { characterApi } from "./services/characterApi";

const rootReducer = combineReducers({ character: characterApi.reducer });

export const setupStore = () => {
    return configureStore({
        reducer: { [characterApi.reducerPath]: characterApi.reducer },
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(characterApi.middleware);
        },
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
