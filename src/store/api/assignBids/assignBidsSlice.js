import fetchWrapper from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
        loading: false,
        error: null,
        success: false,
        assignBids: [],
    };
    
    export const getAllAssignBidsByBroker = createAsyncThunk(
        'assignBids/getAllAssignBidsByBroker',
        async () => {
            try {
                const response = await fetchWrapper(`shipments/assigned/broker`);
                console.log("response", response.data);
                
                return response.data;
            } catch (error) {
                throw error.response ? error.response.data : error.message;
            }
        }
    );

const assignBidsSlice = createSlice({
    name: 'assignBids',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllAssignBidsByBroker.pending, state => {
                state.loading = true;
            })
            .addCase(getAllAssignBidsByBroker.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.assignBids = action.payload;
            })
            .addCase(getAllAssignBidsByBroker.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch assign bids";
            });
    },
});
export default assignBidsSlice.reducer