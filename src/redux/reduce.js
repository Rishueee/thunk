import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk to fetch user data
export const userThunk = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
});

// Initial state
const initialState = {
  users: [],
};

// Create a user slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addInitialState: (state, action) => {
      state.users = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userThunk.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

// Exporting actions, reducer, and selector
export const { addInitialState } = userSlice.actions;
export const userReducer = userSlice.reducer;
export const userSelector = (state) => state.userReducer.users;
