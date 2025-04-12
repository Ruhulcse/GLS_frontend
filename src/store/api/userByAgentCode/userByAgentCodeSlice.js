import fetchWrapper from "@/util/fetchWrapper";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    error: null,
    success: false,
    users: [],
};  

export const getAllUsersByAgent = createAsyncThunk(
    "userByAgentCode/getAllUsersByAgent",
    async ( {id} ) => {  
      try {
        const response = await fetchWrapper(`/users/agent-code/${id}`);
        return response?.data?.data;
      } catch (error) {
        throw error.response ? error.response.data : error.message;
      }
    })

const userByAgentCodeSlice = createSlice({
    name: "userByAgentCode",
    initialState,
    reducers:{},
    extraReducers:builder =>{
        builder.addCase(getAllUsersByAgent.pending,state=>{
            state.loading = true
        })
        .addCase(getAllUsersByAgent.fulfilled,(state,action)=>{
            state.loading = false;
            state.success = true;
            state.users = action.payload
        })
        .addCase(getAllUsersByAgent.rejected,(state,action)=>{
            state.loading = false;
				state.error = action.error.message || 'Failed to fetch users data';
        })
    }
})

export default userByAgentCodeSlice.reducer
