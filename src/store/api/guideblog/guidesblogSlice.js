import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	guideblog: {},
};

export const getGuideBlog = createAsyncThunk(
	'guideblog/getGuideBlog',
	async ({ id }) => {
		try {
			const response = await fetchWrapper(`guide/${id}`);
			return response.data;
		} catch (error) {
			throw error.response ? error.response.data : error.message;
		}
	}
);

const guideblogSlice = createSlice({
	name: 'guideblog',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getGuideBlog.pending, state => {
				state.loading = true;
			})
			.addCase(getGuideBlog.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.guideblog = action.payload;
			})
			.addCase(getGuideBlog.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch blog data';
			});
	},
});

export default guideblogSlice.reducer;

