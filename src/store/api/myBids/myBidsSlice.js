import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	myBids: [],
};

export const getMyBids = createAsyncThunk('bids/getMyBids', async () => {
	try {
		const response = await fetchWrapper(`shipments/mybids`);
		return response.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
});

const myBidsSlice = createSlice({
	name: 'mybids',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getMyBids.pending, state => {
				state.loading = true;
			})
			.addCase(getMyBids.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.myBids = action.payload;
			})
			.addCase(getMyBids.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch bids data';
			});
	},
});

export default myBidsSlice.reducer;
