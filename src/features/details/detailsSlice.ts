import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from '../../config'
import axios from "axios";
import { Country, Status } from "types";

export const loadCountry = createAsyncThunk<
{data: Country[]},
string
>(
    'details/load-country',
    async (name) => {
        return await axios.get(api.searchByCountry(name));
      
    }
);

export const loadNeighbours = createAsyncThunk<
{data: Country[]},
string[]
>(
    'details/load-neighbours',
    async (borders) => {
        return await axios.get(api.filterByCode(borders));
      
    }
);

interface DetailsSlice {
    country: Country | null,
    status: Status,
    errors: null | string,
    neighbours: string[]
}

const initialState: DetailsSlice = {  
    country: null,
    status: 'idle',
    errors: null,
    neighbours: []
};

const detailsSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        resetCountry: () => initialState
    },
    extraReducers: (builder) => {
    builder
        .addCase(loadCountry.pending, (state) => {
            state.status = 'loading'
            state.errors = null
        })
        .addCase(loadCountry.rejected, (state, action) => {
            state.status = 'rejected'
            state.errors = action.error.message || 'Something went wrong'
        })
        .addCase(loadCountry.fulfilled, (state, action) => {
            state.status = 'received'
            state.errors = null
            state.country = action.payload.data[0]
        })
        .addCase(loadNeighbours.fulfilled, (state, action) => {
            state.neighbours = action.payload.data.map(border => border.name)
        })
    }
});

export const detailsReducer = detailsSlice.reducer;
export const {resetCountry} = detailsSlice.actions;

