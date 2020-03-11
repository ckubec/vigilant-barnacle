import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../app/store";

interface AppState {
    lightMode: boolean;
};

const initialState: AppState = {
    lightMode: false,
};

export const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        lightModeSwap: state => {
             state.lightMode = (state.lightMode) ? false : true;
        }
    }

});

export const { lightModeSwap } = slice.actions;

export const selectLight = (state: RootState) => state.app.lightMode;

export default slice.reducer;