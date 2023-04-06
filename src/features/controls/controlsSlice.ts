import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Region } from "types";

type controlSliceProps = {
    searchValue: string,
    regionValue: Region | ''
}

const initialState: controlSliceProps = {
    searchValue: '',
    regionValue: ''
};

const controlSlice = createSlice({
    name: 'controls',
    initialState,
    reducers: {
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setSelectValue: (state, action: PayloadAction<Region | ''>) => {
            state.regionValue = action.payload
        },

        clearControls: () => initialState
    }
});

export const {setSearchValue, setSelectValue, clearControls} = controlSlice.actions;
export const controlsReducer = controlSlice.reducer;

