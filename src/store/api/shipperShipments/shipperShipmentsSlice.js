import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	shipperShipments: [],
};

export const getAllShipperShipments = createAsyncThunk("shipments/getAllShipperShipments",async({id})=>{
    try {
        const response = await fetchWrapper(`/shipper/${id}`);
        console.log(response);
        
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
})

const shipperShipmentsSlice = createSlice({
    name: 'shipments',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getAllShipperShipments.pending, state => {
                state.loading = true;
            })
            .addCase(getAllShipperShipments.fulfilled, (state, action) => {
                state.loading = false;
                state.success = true;
                state.shipperShipments = action.payload;
            })
            .addCase(getAllShipperShipments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch shipments data';
            });
    },
});

export default shipperShipmentsSlice.reducer;