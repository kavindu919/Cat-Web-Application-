import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const API_KEY =
//   "live_EmvuiHLY7y0Nqwn3J7xMvrsovdD4uln2PRzHbmfSIPabKL4YbosfsgNVqTtYb7VX";

interface beedState {
  breeds: any[];
  selectedBreed: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: beedState = {
  breeds: [],
  selectedBreed: null,
  loading: false,
  error: null,
};

export const fetchBreeds = createAsyncThunk("breeds/fetchBreeds", async () => {
  const response = await axios.get(
    `https://api.thecatapi.com/v1/breeds?limit=20`,
    {
      headers: {
        "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
      },
    }
  );
  return response.data;
});

console.log("This" + process.env.CAT_API_KEY);

const breedSlice = createSlice({
  name: "breed",
  initialState,
  reducers: {
    selectBreed: (state, action) => {
      state.selectedBreed = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreeds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBreeds.fulfilled, (state, action) => {
        state.loading = false;
        state.breeds = action.payload;
      })
      .addCase(fetchBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch breeds";
      });
  },
});

export const { selectBreed } = breedSlice.actions;
export default breedSlice.reducer;
