import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	blogs: [],
};

export const getAllBlogs = createAsyncThunk(
	'blogs/getAllBlogs',
	async () => {
		try {
			const response = await fetchWrapper(`blogs`);
            console.log(response.data)
			return response.data.data;
		} catch (error) {
			throw error.response ? error.response.data : error.message;
		}
	}
);

const blogsSlice = createSlice({
	name: 'blogs',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllBlogs.pending, state => {
				state.loading = true;
			})
			.addCase(getAllBlogs.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.blogs = action.payload;
			})
			.addCase(getAllBlogs.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch blogs data';
			});
	},
});

export default blogsSlice.reducer;
