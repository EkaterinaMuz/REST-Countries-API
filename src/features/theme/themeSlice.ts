import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type Theme = 'light' | 'dark';

const ThemeSlice = createSlice({
    name: 'theme',
    initialState: 'light' as Theme,
    reducers: {
        changeTheme: (_, action: PayloadAction<Theme>) => action.payload
    }

});

export const {changeTheme} = ThemeSlice.actions;
export const ThemeReducer = ThemeSlice.reducer;

