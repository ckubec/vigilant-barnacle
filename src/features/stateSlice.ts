import { createSlice } from '@reduxjs/toolkit';
import {RootState} from "../app/store";

interface AppState {
    lightMode: boolean;
    aboutExpand: boolean;
};

const initialState: AppState = {
    lightMode: window.matchMedia('(prefers-color-scheme: light)').matches,
    aboutExpand: false,
};

export const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        lightModeSwap: state => {
             state.lightMode = (state.lightMode) ? false : true;
        },
        expandedAbout: state => {
            state.aboutExpand = (state.aboutExpand) ? false : true;
        }
    }

});

export const { lightModeSwap, expandedAbout } = slice.actions;

export const selectLight = (state: RootState) => state.app.lightMode;
export const selectAboutExpand = (state: RootState) => state.app.aboutExpand;

export default slice.reducer;