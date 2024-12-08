import fetchWrapper from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: false,
  contactMessage: [],
};

export const getAllMessage = createAsyncThunk(
  "contact/getAllMessage",
  async () => {
    try {
      const response = await fetchWrapper(`contacts`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

const contactSlice = createSlice({
  name: "Contacts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllMessage.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.contactMessage = action.payload;
      })
      .addCase(getAllMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch contact message";
      });
  },
});

export default contactSlice.reducer;
