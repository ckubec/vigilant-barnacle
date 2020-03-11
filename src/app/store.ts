import {configureStore, ThunkAction, Action} from "@reduxjs/toolkit";
import appReducer from '../features/stateSlice';


export const store = configureStore({
    reducer: {
        app: appReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;