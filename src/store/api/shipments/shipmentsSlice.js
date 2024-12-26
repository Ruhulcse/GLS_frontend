
import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	shipments: [],
};

export const getAllShipments = createAsyncThunk(
	'shipments/getAllShipments',
	async () => {
		try {
			const response = await fetchWrapper(`shipments`);
			return response.data;
		} catch (error) {
			throw error.response ? error.response.data : error.message;
		}
	}
);

const shipmentsSlice = createSlice({
	name: 'shipments',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllShipments.pending, state => {
				state.loading = true;
			})
			.addCase(getAllShipments.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.shipments = action.payload;
			})
			.addCase(getAllShipments.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch shipments data';
			});
	},
});

export default shipmentsSlice.reducer;