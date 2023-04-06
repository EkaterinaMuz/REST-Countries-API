import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../config";
import axios from "axios";
import { Country, Status } from "types";

export const fetchingCountries = createAsyncThunk<
  { data: Country[] },
  undefined,
  {
    rejectValue: string,
    state: {countries: CountrySlice } 
  }
>("countries/fetching", async (_, { rejectWithValue }) => {
  try {
    return await axios.get(api.ALL_COUNTRIES);
  } catch (error) {
    if (error instanceof Error) return rejectWithValue(error.message);
    return rejectWithValue("Unknown error");
  }
},
{condition: (_, {getState}) => {
    const {countries: {status}} = getState()
    if(status === 'loading') 
        return false
}}
);

interface CountrySlice {
  list: Country[];
  status: Status;
  errors: null | string;
}

const initialState: CountrySlice = {
  list: [],
  status: "idle",
  errors: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchingCountries.pending, (state) => {
        state.status = "loading";
        state.errors = null;
      })
      .addCase(fetchingCountries.rejected, (state, action) => {
        state.status = "rejected";
        state.errors = action.payload || "Unknown error";
      })
      .addCase(fetchingCountries.fulfilled, (state, action) => {
        state.status = "received";
        state.errors = null;
        state.list = action.payload.data;
      });
  },
});

export const countriesReducer = countriesSlice.reducer;
