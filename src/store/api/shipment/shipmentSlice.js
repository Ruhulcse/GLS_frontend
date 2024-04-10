import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	shipment: {},
};

export const getShipment = createAsyncThunk(
	'shipment/getShipment',
	async ({ id }) => {
		try {
			const response = await fetchWrapper(`shipments/${id}`);
			return response.data;
		} catch (error) {
			throw error.response ? error.response.data : error.message;
		}
	}
);

const shipmentSlice = createSlice({
	name: 'shipment',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getShipment.pending, state => {
				state.loading = true;
			})
			.addCase(getShipment.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.shipment = action.payload;
			})
			.addCase(getShipment.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch shipment data';
			});
	},
});

export default shipmentSlice.reducer;
