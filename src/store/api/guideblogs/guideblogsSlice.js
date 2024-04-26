import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	guideblogs: [],
};

export const getAllGuideBlogs = createAsyncThunk(
	'guideBlogs/getAllGuideBlogs',
	async () => {
		try {
			const response = await fetchWrapper(`guides`);
			return response.data.data;
		} catch (error) {
			throw error.response ? error.response.data : error.message;
		}
	}
);

const guideblogsSlice = createSlice({
	name: 'guideblogs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllGuideBlogs.pending, state => {
				state.loading = true;
			})
			.addCase(getAllGuideBlogs.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.guideblogs = action.payload;
			})
			.addCase(getAllGuideBlogs.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch guideblogs data';
			});
	},
});

export default guideblogsSlice.reducer;
