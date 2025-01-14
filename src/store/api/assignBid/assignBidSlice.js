import fetchWrapper from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  success: false,
  assignBid: {},
};

export const getAssignBid = createAsyncThunk(
  "assignBid/getAssignBid",
  async ({ id }) => {
    try {
      const response = await fetchWrapper(`shipment/bids/${id}`);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error.message;
    }
  }
);

const assignBidSlice = createSlice({
  name: "assignBid",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAssignBid.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAssignBid.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.assignBid = action.payload;
      })
      .addCase(getAssignBid.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message||"Failed to get assignBid";
      });
  },
});

export default assignBidSlice.reducer;