import fetchWrapper from '@/util/fetchWrapper';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
	error: null,
	success: false,
	agents: [],
};

export const getAllAgents = createAsyncThunk('agents/getAllAgents', async () => {
	try {
		const response = await fetchWrapper(`agent-users`);
		return response.data.data;
	} catch (error) {
		throw error.response ? error.response.data : error.message;
	}
});

const agentsSlice = createSlice({
	name: 'agents',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(getAllAgents.pending, state => {
				state.loading = true;
			})
			.addCase(getAllAgents.fulfilled, (state, action) => {
				state.loading = false;
				state.success = true;
				state.agents = action.payload;
			})
			.addCase(getAllAgents.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'Failed to fetch agents data';
			});
	},
});

export default agentsSlice.reducer;
